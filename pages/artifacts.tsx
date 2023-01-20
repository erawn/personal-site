import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllImages } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import Header from "../components/header";
import Artifacts from "../components/artifacts";
import { pageview } from "../util/gtag";
import { useEffect } from "react";
type Props = {
  allPosts: string[];
};

export default function Index({ allPosts }: Props) {
  useEffect(() => {
    pageview(new URL("https://www.ericrawn.media/artifacts"));
  });
  return (
    <>
      <Layout>
        <Head>
          <title>Eric Rawn Portfolio</title>
        </Head>
        <Header />
        <Container>
          {allPosts.length > 0 && <Artifacts images={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllImages("public/assets/artifacts/");
  return {
    props: { allPosts },
  };
};
