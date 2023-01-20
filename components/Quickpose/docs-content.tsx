import * as Separator from "@radix-ui/react-separator";
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
import remarkGfm from "remark-gfm";
import markdownStyles from "./doc-styles.module.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

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
    <div className="bg-darkGray mb-0 mt-0 sm:sticky top-16 bg-darkGrey z-30 h-16 min-w-full whitespace-nowrap">
      <div className="sm:absolute w-full min-w-full -inset-y-2 bg-darkGrey mb-10">
        <Separator.Root className="h-[1px] bg-gradient-to-l from-quickpose-10 to-quickpose-80" />
        <div className="rounded-lg mb-5 mt-0 max-w-lg text-3xl tracking-wide leading-8 text-left font-bold text-white">
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
      {
        key: "basics",
        href: "#basics",
        title: "The Basics",
      },
    ],
  },
  {
    key: "features",
    href: "#features",
    title: "Features",
    subEntry: [
      {
        key: "checkpoints",
        href: "#checkpoints",
        title: "Checkpoints",
      },
      {
        key: "exportbycolor",
        href: "#exportbycolor",
        title: "Export By Color",
      },
    ],
  },

  {
    key: "faq",
    href: "#faq",
    title: "FAQ",
  },
];

function DocsItems(): AnchorLinkItemProps[] {
  let items: AnchorLinkItemProps[] = docContent.map((entry) => ({
    key: entry.key,
    href: entry.href,
    title: entry.title,
    children:
      entry.subEntry !== undefined
        ? entry.subEntry.map((child) => ({
            key: child.key,
            href: child.href,
            title: child.title,
          }))
        : null,
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
              <div id={entry.key}>
                {parent !== undefined ? entryWrapper(parent, entry.key) : ""}
              </div>
              {entry.subEntry !== undefined
                ? entry.subEntry.map((child) => {
                    const childDoc = entries.find(
                      (slug) => slug.title === child.key
                    );
                    if (childDoc === undefined) {
                      console.log(child.key);
                    }
                    return (
                      <div id={child.key}>
                        {buildSubTitle(child.title)}
                        {childDoc !== undefined
                          ? entryWrapper(childDoc, child.key)
                          : ""}
                      </div>
                    );
                  })
                : null}
            </>
          );
        })}
      </div>
    </>
  );
};

const entryWrapper = (parent, id: any) => {
  return (
    <div className="my-5 mr-10 prose font-light text-gray-200">
      <div className="mb-4 ml-5 leading-loose ">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          className={markdownStyles["markdown"]}
          children={parent.content}
          key={id}
        />
      </div>
    </div>
  );
};

export default DocsContent;
export { DocsItems };
