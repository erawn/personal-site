import Container from "../container";
import { EXAMPLE_PATH } from "../../lib/constants";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t-0 border-neutral-200">
      <Separator.Root className="h-1 bg-gradient-to-l from-quickpose-10 to-quickpose-80" />
      <Container>
        <div className="flex justify-between items-center space-x-6">
          <div className="py-5 flex items-center">
            <Link href={"/quickpose"} className="">
              <Image
                src={"/assets/quickpose/quickpose_logo_main.png"}
                alt={`Quickpose Logo`}
                className={"rounded-md"}
                width={50}
                height={100}
              />
            </Link>
            <div className="flex flex-col ml-5">
              <div className="text-sm tracking-tighter leading-tight text-left  text-gray-500 ">
                Copyright © 2023{" "}
                <Link
                  href={"https://ericrawn.media/"}
                  className="text-quickpose-10 hover:text-quickpose-80"
                >
                  Eric Rawn.{" "}
                </Link>
                All rights reserved.
              </div>
            </div>
          </div>
          <div></div>

          <div className="scale-[2.5]">
            <Link href={"https://github.com/erawn/Quickpose"} className="">
              <GitHubLogoIcon className=" text-white" />
            </Link>
          </div>

          {/* <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
