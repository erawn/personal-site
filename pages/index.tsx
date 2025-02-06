import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import Header from "../components/header";
import Publications from "../components/publications";
import { pageview } from "../util/gtag";
import { useEffect } from "react";
type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const researchPosts = allPosts.filter((post) => post.type === "publication");

  useEffect(() => {
    pageview(new URL("https://www.ericrawn.media/"));
  });
  return (
    <>
      <Layout>
        <Head>
          <title>Eric Rawn Portfolio</title>
        </Head>
        <Header />
        <Intro />
        <Container>
          {allPosts.length > 0 && <Publications posts={researchPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "secondImage",
    "excerpt",
    "pdfLink",
    "pubLink",
    "conference",
    "type",
    "content",
  ]);

  return {
    props: { allPosts },
  };
};
