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
import Image from "next/image";
export default function Index() {
  return (
    <>
      <Layout subpage="quickpose/">
        <Head>
          <title>Quickpose: A Version Control Tool for Processing</title>
        </Head>
        <Header />
        <section className="bg-unblur bg-cover bg-center font-LibreFranklin text-white items-center">
          <div className=" backdrop-blur-lg  ">
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

            <div className=" pl-9 pr-9 pb-5 flex justify-center">
              <div className="rounded-lg max-w-lg text-xl tracking-wide leading-8 text-center text-gray-200">
                Quickpose is a version control system for{" "}
                <Link
                  as={`https://processing.org/`}
                  href="https://processing.org/"
                  className=" text-quickpose-80 hover:text-quickpose-10"
                >
                  <span className="">Processing</span>
                </Link>{" "}
                designed for creative exploration. With 1-click forking and
                navigating, canvas annotations and notes, and automatic saves
                and backups, it's not just a version control system,{" "}
                <span className="font-extrabold font-LibreFranklinItalic">
                  Quickpose helps you manage your entire creative process.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-darkGrey font-LibreFranklin text-white">
          <Separator.Root className="h-2 bg-gradient-to-r from-quickpose-10 to-quickpose-80" />
          <div className="grid px-5 py-3 grid-cols-1 justify-items-center items-center sm:grid-cols-2 md:gap-x-6 lg:gap-x-16 gap-y-4 md:gap-y-4 mt-5 mb-0 ">
            <h1 className=" align-middle font-LibreFranklin text-3xl md:text-4xl font-light mb-3 leading-loose pl-5">
              See every version of your sketch on an interactive canvas
            </h1>
            <div className="mr-5 min-w-fit">
              <div className="mb-5">
                <Image
                  src={"/assets/quickpose/unblur.png"}
                  alt={`Cover Image for Quickpose Research Paper`}
                  // className={cn('shadow-sm w-full', {
                  //   'hover:shadow-lg hover:cursor-pointer transition-shadow duration-200': post.slug,
                  // })}
                  width={1300}
                  height={630}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <Separator.Root className="h-2 bg-gradient-to-l from-quickpose-10 to-quickpose-80" />

          <div className="flexflex-col justify-center">
            <div className="align-middle font-LibreFranklin text-3xl md:text-4xl px-4 py-9 font-light leading-loose text-center">
              Both your code and render update in realtime
            </div>
            <div className="mb-8 mx-8">
              <Image
                src={"/assets/quickpose/switching.gif"}
                alt={`Cover Image for Quickpose Research Paper`}
                // className={cn('shadow-sm w-full', {
                //   'hover:shadow-lg hover:cursor-pointer transition-shadow duration-200': post.slug,
                // })}
                width={1300}
                height={630}
                quality={100}
                className="rounded-md"
              />
            </div>
          </div>
          <Separator.Root className="h-2 bg-gradient-to-r from-quickpose-10 to-quickpose-80" />
          <div className="grid grid-cols-1 px-10 justify-items-center items-center sm:grid-cols-2 md:gap-x-6 lg:gap-x-16 gap-y-4 md:gap-y-4 mt-5 mb-0 ">
            <div className="my-5 min-w-fit">
              <div className="mb-5">
                <Image
                  src={"/assets/quickpose/annotationWeb.png"}
                  alt={`Cover Image for Quickpose Research Paper`}
                  // className={cn('shadow-sm w-full', {
                  //   'hover:shadow-lg hover:cursor-pointer transition-shadow duration-200': post.slug,
                  // })}
                  width={1875}
                  height={1030}
                  quality={100}
                  className="rounded-md"
                />
              </div>
            </div>
            <div>
              <h1 className="pl-4 align-middle font-LibreFranklin text-3xl md:text-4xl font-light mb-10 leading-relaxed">
                Add Notes, Annotations, Images, and Links
              </h1>
              <h1 className="pl-4 align-middle font-LibreFranklin text-3xl md:text-4xl font-light mb-3 leading-relaxed">
                Arrange and style your creative coding journey, wherever it
                takes you
              </h1>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
