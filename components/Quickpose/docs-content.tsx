import Container from "../container";
import { EXAMPLE_PATH } from "../../lib/constants";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
import remarkGfm from "remark-gfm";
import markdownStyles from "./doc-styles.module.css";
import ReactMarkdown from "react-markdown";

interface docEntry {
  key: string;
  href: string;
  title: string;
  subEntry?: docEntry[];
}
const buildSubTitle = (title: string) => {
  return <div className="my-3 text-2xl">{title}</div>;
};
const buildTitle = (title: string, id: string) => {
  return (
    <div
      id={id}
      className="bg-darkGray mb-0 mt-0 sticky top-16 bg-darkGrey z-30 h-16 min-w-full whitespace-nowrap"
    >
      <div className="absolute w-full min-w-full -inset-y-2 bg-darkGrey mb-10">
        <Separator.Root className="h-[1px] bg-gradient-to-l from-quickpose-10 to-quickpose-80" />
        <div className="rounded-lg mb-5 mt-0 max-w-lg text-3xl tracking-wide leading-8 text-center font-bold text-white">
          <div className="mt-4 ">{title}</div>
        </div>
        <Separator.Root className="h-[1px] bg-gradient-to-l from-quickpose-10 to-quickpose-80" />
      </div>
    </div>
  );
};

var docContent: docEntry[] = [
  {
    key: "getting-started",
    href: "#getting-started",
    title: "Getting Started",
    subEntry: [
      {
        key: "about",
        href: "#about",
        title: "About",
      },
      {
        key: "installation",
        href: "#installation",
        title: "Installation",
      },
    ],
  },
  {
    key: "features",
    href: "#features",
    title: "Features",
    subEntry: [
      {
        key: "features",
        href: "#features",
        title: "Features",
      },
    ],
  },
];

function DocsItems(): AnchorLinkItemProps[] {
  let items: AnchorLinkItemProps[] = docContent.map((entry) => ({
    key: entry.key,
    href: entry.href,
    title: entry.title,
    children: entry.subEntry.map((child) => ({
      key: child.key,
      href: child.href,
      title: child.title,
    })),
  }));
  return items;
}

const DocsContent = ({ entries }) => {
  return (
    <>
      <div className=" scroll-pt-10 font-LibreFranklin mt-0">
        {docContent.map((entry) => {
          const parent = entries.find((slug) => slug.title === entry.key);
          if (parent === undefined) {
            console.log(entry.key);
          }
          return (
            <>
              {buildTitle(entry.title, entry.key)}
              {parent !== undefined ? entryWrapper(parent, entry.key) : ""}
              {entry.subEntry.map((child) => {
                const childDoc = entries.find(
                  (slug) => slug.title === child.key
                );
                if (childDoc === undefined) {
                  console.log(child.key);
                }
                return (
                  <>
                    {buildSubTitle(child.title)}
                    {childDoc !== undefined
                      ? entryWrapper(childDoc, child.key)
                      : ""}
                  </>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
};

const entryWrapper = (parent, id: any) => {
  console.log(parent, id);
  return (
    <div id={id}>
      <div className="my-5 mr-10 prose font-light text-gray-200">
        <div className="mb-4 prose leading-0 ">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={markdownStyles["markdown"]}
            children={parent.content}
          />
        </div>
      </div>
    </div>
  );
};

export default DocsContent;
export { DocsItems };
