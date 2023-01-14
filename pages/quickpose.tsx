import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/Quickpose/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import Header from "../components/Quickpose/header";
import Publications from "../components/publications";
import { useEffect } from "react";
import Link from "next/link";
import { DownloadIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";

export default function Index() {
  return (
    <>
      <Layout subpage="quickpose/">
        <Head>
          <title>Quickpose: A Version Control Tool for Processing</title>
        </Head>
        <Header />
        <section className="bg-black font-LibreFranklin text-white items-center">
          <div className="pt-20 pb-5 flex flex-row justify-center">
            <h1
              className="text-4xl md:text-7xl leading-tight max-w-lg font-bold 
            text-center bg-gradient-to-br from-quickpose-10 to-quickpose-80
            inline-block text-transparent bg-clip-text"
            >
              Version Control for Sketching in Code
            </h1>
          </div>
          <div className="flex pb-10 justify-center items-center">
            <button>
              <Link
                as={`https://quickpose.ericrawn.media/`}
                href="https://quickpose.ericrawn.media/"
                className="flex select-none items-center outline 
                ring-2  rounded-md px-2 py-1
                hover:bg-quickpose-10 hover:text-black hover:ring-black
                text-quickpose-10 bg-black ring-quickpose-10"
              >
                {<DownloadIcon className="scale-150" />}
                <span className="font-LibreFranklin text-xl font-semibold ml-2">
                  Download for Processing 4
                </span>
              </Link>
            </button>
          </div>

          <div className="pl-9 pr-9 pb-5 flex justify-center">
            <div className="max-w-lg text-xl tracking-wide leading-8 text-center font-light text-gray-300">
              Quickpose is a version control system for Processing designed for
              creative exploration. With 1-click forking and navigating, canvas
              annotations and notes, and automatic saves and backups, it's not
              just a version control system,{" "}
              <span className="font-extrabold font-LibreFranklinItalic">
                Quickpose helps you manage your entire creative process.
              </span>
            </div>
          </div>
        </section>
        <section className="bg-black text-white">
          <Separator.Root className="h-2 bg-gradient-to-r from-quickpose-10 to-quickpose-80" />
          <div className="flex">
            <div className="max-w-sm text-xl tracking-wide leading-8 text-left font-light text-gray-300">
              See every version of your sketch on an interactive canvas
            </div>
            <div className=""></div>
          </div>
          <Separator.Root className="h-2 bg-gradient-to-l from-quickpose-10 to-quickpose-80" />
          <div className="flex flex-row justify-center">
            <div className="text-xl tracking-wide leading-8 text-center font-light text-gray-300">
              Both your code and render update in realtime
            </div>
            <div className=""></div>
          </div>
          <Separator.Root className="h-2 bg-gradient-to-r from-quickpose-10 to-quickpose-80" />
          <div className="flex">
            <div className="max-w-sm text-xl tracking-wide leading-8 text-left font-light text-gray-300">
              Add Notes, Annotations, and Links
            </div>
            <div className=""></div>
          </div>
        </section>
      </Layout>
    </>
  );
}
