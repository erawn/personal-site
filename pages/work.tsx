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
import { pageview } from "../util/gtag";
import { useEffect } from "react";
import Footer from "../components/footer";
type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const workPosts = allPosts.filter((post) => post.type === "work");
  useEffect(() => {
    pageview(new URL("https://www.ericrawn.media/work"));
  });

  return (
        <div className ="min-h-screen flex justify-center bg-slate-500">
        <div className="max-w-3xl min-w-full bg-slate-200 ">
        <Head>
          <title>Eric Rawn Portfolio</title>
        </Head>
     
        <Header />

        <Container>
        <div className="flex flex-col">
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {workPosts.length > 0 && <MoreStories posts={workPosts} />}
          <p className="text-slate-200">
          wealth of tuner arrangements (7)
          </p>
          </div>
          <Footer />
        </Container>
        </div>
      </div>
   
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "prettyDate",
    "excerpt",
    "type",
  ]);

  return {
    props: { allPosts },
  };
};
