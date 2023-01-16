import Link from "next/link";
import Image from "next/image";
import {
  CaretRightIcon,
  CheckIcon,
  CropIcon,
  ExternalLinkIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  FileIcon,
  FrameIcon,
  GitHubLogoIcon,
  GridIcon,
  HamburgerMenuIcon,
  InfoCircledIcon,
  Link2Icon,
  MixerHorizontalIcon,
  PersonIcon,
  ReaderIcon,
  RocketIcon,
  TransparencyGridIcon,
} from "@radix-ui/react-icons";
import cx from "classnames";
import React, { ReactNode, useState } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import DropdownMenu from "./dropdownMenu";
import Button from "./button";
import * as Separator from "@radix-ui/react-separator";

const DropdownMenuItem = ({ title, link, icon }) => {
  return (
    <DropdownMenuPrimitive.Item className="outline-none">
      <Link
        as={link}
        href={link}
        className="flex flex-row outline-none select-none cursor-pointer items-center object-right text-right 
    justify-end rounded-md px-4 py-2 text-2xl hover:bg-gray-700 text-quickpose-80 hover:text-quickpose-10"
      >
        {icon}
        <span className="flex-grow font-LibreFranklin font-semibold ml-4 ">
          {title}
        </span>
      </Link>
    </DropdownMenuPrimitive.Item>
  );
};

const Header = () => {
  return (
    <div className="sm:sticky top-0 h-15 left-0 bottom-16 z-40">
      <header className="">
        <section className="top-0 h-15 left-0 right-0 flex flex-row justify-between items-center pl-4 pt-2 pb-2 bg-darkGrey">
          <Link href={"/quickpose"} className="relative block h-200 w-100">
            <Image
              src={"/assets/quickpose/quickpose-banner-grad-transparent.png"}
              alt={`Quickpose Logo`}
              className={"rounded-md cursor-pointer"}
              width={250}
              height={100}
            />
          </Link>
          <section className="md:text-2xl relative font-LibreFranklin tracking-tighter text-center leading-tight md:pl-4">
            <div className="md:hidden float-right pr-4 bg-darkGrey">
              <div className="relative inline-block text-right ">
                <DropdownMenuPrimitive.Root>
                  <DropdownMenuPrimitive.Trigger asChild>
                    <Button>
                      <HamburgerMenuIcon className="scale-[2.0] cursor-pointer" />
                    </Button>
                  </DropdownMenuPrimitive.Trigger>

                  <DropdownMenuPrimitive.Portal>
                    <DropdownMenuPrimitive.Content
                      align="end"
                      sideOffset={5}
                      className={cx(
                        " radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
                        "w-48 rounded-lg px-1.5 py-1 shadow-md outline-none",
                        "bg-darkGrey ring-2 ring-quickpose-80 z-50"
                      )}
                    >
                      <DropdownMenuItem
                        title={"Docs"}
                        link={"/quickpose-docs"}
                        icon={<ReaderIcon className="scale-[1.3]" />}
                      />
                      <DropdownMenuItem
                        title={"Research"}
                        link={"/quickpose-research"}
                        icon={<InfoCircledIcon className="scale-[1.3]" />}
                      />
                      <DropdownMenuItem
                        title={"Github"}
                        link={"https://github.com/erawn/Quickpose"}
                        icon={<GitHubLogoIcon className="scale-[1.3]" />}
                      />
                      <DropdownMenuItem
                        title={"Launch"}
                        link={"https://quickpose.ericrawn.media/"}
                        icon={<ExternalLinkIcon className="scale-150" />}
                      />
                    </DropdownMenuPrimitive.Content>
                  </DropdownMenuPrimitive.Portal>
                </DropdownMenuPrimitive.Root>
              </div>
            </div>
            <ul className="flex space-x-6 text-quickpose-80 float-right max-md:hidden font-LibreFranklin font-semibold items-center">
              <li className="cursor-pointer">
                <a
                  className="  hover:text-quickpose-10 "
                  href="/quickpose-docs"
                >
                  Docs
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  className=" hover:text-quickpose-10 "
                  href="/quickpose-research"
                >
                  Research
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  className="cursor-pointer hover:text-quickpose-10 "
                  href="https://github.com/erawn/Quickpose"
                >
                  Github
                </a>
              </li>
              <div className="pr-2 outline-none">
                <Link
                  as={`https://quickpose.ericrawn.media/`}
                  href="https://quickpose.ericrawn.media/"
                  className="flex select-none cursor-pointer items-center outline-none ring-2 ring-quickpose-10 
                object-right text-right rounded-md px-2 py-1 text-quickpose-10
                hover:bg-quickpose-10 hover:text-black hover:ring-black"
                >
                  {<ExternalLinkIcon className="scale-150" />}
                  <span className="w-20 font-LibreFranklin font-semibold ml-2">
                    Launch
                  </span>
                </Link>
              </div>

              {/* <Link> ">
              <a className=""></a>
              <span
                href=""
                className="flex-grow   ml-3 font-LibreFranklin font-semibold"
              >
                Get Started
              </span>
            </Link> */}
            </ul>
          </section>
        </section>
        <Separator.Root className=" h-1 bg-gradient-to-r from-quickpose-10 to-quickpose-80" />
      </header>
    </div>
  );
};

export default Header;
