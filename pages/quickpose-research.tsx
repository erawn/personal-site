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
import {
  DownloadIcon,
  ExternalLinkIcon,
  Link1Icon,
  Link2Icon,
} from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";
import { pageview } from "../util/gtag";
export default function Index() {
  useEffect(() => {
    pageview(new URL("https://www.ericrawn.media/quickpose-research"));
  });

  return (
    <>
      <div className="bg-darkGrey">
        <Layout subpage="quickpose/">
          <Head>
            <title>Quickpose: A Version Control Tool for Processing</title>
          </Head>
          <Header />
          <section className=" bg-darkGrey font-LibreFranklin text-white items-center">
            <div className=" pl-9 pr-9 pb-5 pt-10 flex justify-center">
              <div className="rounded-lg bg-gra max-w-lg text-xl tracking-wide leading-8 text-center font-light text-gray-300">
                Quickpose is an ongoing research project by{" "}
                <Link
                  as={`https://ericrawn.media/`}
                  href="https://ericrawn.media/"
                  className=" text-quickpose-80 hover:text-quickpose-10"
                >
                  <span className="">Eric Rawn</span>
                </Link>
                , a PhD student in the{" "}
                <Link
                  as={`https://www.hybrid-ecologies.org/`}
                  href="https://www.hybrid-ecologies.org/"
                  className="text-quickpose-80 hover:text-quickpose-10"
                >
                  <span className="">Hybrid Ecologies Lab</span>
                </Link>{" "}
                at UC Berkeley. To learn more, please see our published work
                below:
              </div>
            </div>
          </section>
          <section className="bg-darkGrey text-white">
            <Separator.Root className="h-1 bg-gradient-to-r from-quickpose-10 to-quickpose-80" />
            <div className="flex flex-col overflow-visible md:flex-row md: gap-x-10 gap-y-4 mt-10 mb-10 mx-5 min-h-fit ">
              <div className="flex-initial order-1 md:order-2 font-LibreFranklin min-w-[45%]">
                <h1 className="text-3xl text-bold mb-3 leading-snug">
                  {" "}
                  Understanding Version Control as Material Interaction with{" "}
                  <span className="font-LibreFranklinItalic">Quickpose</span>
                </h1>
                <h3 className="text-1xl font-thin mb-3 leading-snug">
                  Eric Rawn, Jingyi Li, Eric Paulos, and Sarah Chasins
                </h3>
                <h3 className="text-2xl font-bold mb-3 leading-snug">
                  CHI 2023
                </h3>
                <div className="flex font-bold pb-3 space-x-4">
                  <Link
                    as={
                      "/assets/blog/publications/quickpose/Quickpose_CHI23_Rawn.pdf"
                    }
                    href="/assets/blog/publications/quickpose/Quickpose_CHI23_Rawn.pdf"
                    className="flex select-none items-center outline-none 
                ring-2  rounded-md px-2 py-1
                hover:bg-quickpose-10 hover:text-black hover:ring-black
                text-quickpose-10 bg-black ring-quickpose-10"
                  >
                    {<DownloadIcon className="scale-150" />}
                    <span className="font-LibreFranklin text-xl font-semibold ml-2">
                      PDF
                    </span>
                  </Link>
                  <Link
                    as={`/assets/blog/publications/quickpose/Quickpose_CHI23_Rawn.pdf`}
                    href="/assets/blog/publications/quickpose/Quickpose_CHI23_Rawn.pdf"
                    className="flex select-none items-center outline-none 
                ring-2  rounded-md px-2 py-1
                hover:bg-quickpose-10 hover:text-black hover:ring-black
                text-quickpose-10 bg-black ring-quickpose-10"
                  >
                    {<Link2Icon className="scale-150" />}
                    <span className="font-LibreFranklin text-xl font-semibold ml-2">
                      Link
                    </span>
                  </Link>
                </div>

                <article className="mb-4 text-gray-300 font-light leading-normal">
                  Abstract: Whether a programmer with code or a potter with
                  clay, practitioners engage in an ongoing process of working
                  and reasoning with materials. Existing discussions in HCI have
                  provided rich accounts of these practices and processes, which
                  we synthesize into three themes: (1) reciprocal discovery of
                  goals and materials, (2) local knowledge of materials, and (3)
                  annotation for holistic interpretation. We then apply these
                  design principles generatively to the domain of version
                  control to present Quickpose: a version control system for
                  creative coding. In an in-situ, longitudinal study of
                  Quickpose guided by our themes, we collected usage data,
                  version history, and interviews. Our study explored our
                  participants’ material interaction behaviors and the initial
                  promise of our proposed measures for doing so. Quickpose is an
                  exploration of version control as material interaction, using
                  existing discussions to inform domain-specific concepts,
                  measures, and designs for version control systems.
                </article>
                <div></div>
              </div>
              <div className="order-1 md:order-1 mr-5 min-w-[45%]">
                <div className="mb-5 w-[100%] min-h-[60] aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/v3yaseA7X2E"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mb-5 max-w-[100%]">
                  <Image
                    src={"/assets/quickpose/quickposetop.jpg"}
                    alt={`Cover Image for Quickpose Research Paper`}
                    // className={cn('shadow-sm w-full', {
                    //   'hover:shadow-lg hover:cursor-pointer transition-shadow duration-200': post.slug,
                    // })}
                    className="rounded-2xl"
                    width={1300}
                    height={630}
                  />
                </div>
                <div className="mb-5 max-w-[100%]">
                  <Image
                    src={"/assets/quickpose/dirgraph.png"}
                    alt={`Cover Image for Quickpose Research Paper`}
                    // className={cn('shadow-sm w-full', {
                    //   'hover:shadow-lg hover:cursor-pointer transition-shadow duration-200': post.slug,
                    // })}
                    className="rounded-2xl"
                    width={1300}
                    height={630}
                  />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
}
