import type Author from "../interfaces/author";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import markdownStyles from "./pub-styles.module.css";
import ReactMarkdown from "react-markdown";
type Props = {
  title: string;
  coverImage: string;
  secondImage: string;
  date: string;
  excerpt: string;
  conference: string;
  award: string;
  pdfLink: string;
  pubLink: string;
  author: Author;
  slug: string;
  content: string;
};

const ResearchPost = ({
  title,
  coverImage,
  secondImage,
  date,
  excerpt,
  conference,
  award,
  pdfLink,
  pubLink,
  author,
  slug,
  content,
}: Props) => {
  // console.log(JSON.stringify(author.name))
  return (
    <div className="mb-5 pr-5">
      {/* md:gap-x-6 lg:gap-x-16 gap-y-4 md:gap-y-4 */}
      {/* <div className="justify-stretch grid grid-cols-3 place-content-center justify-center justify-items-center max-w-xl1  mt-5 mb-0 "> */}
      <div className="flex">
        {/* <div className="w-16 flex-none justify-self-center place-self-center">
        {excerpt}
        </div> */}
        <div className="sm:block hidden flex justify-items-center items-center justify-center relative ml-5 flex-none w-[300px]">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            // className="max-h-[100px] width:auto height:auto"
            width="0"
            height="0"
            sizes="100vw"
            className="h-fit w-fit object-scale-down max-h-[300px]"
          />

          {/* {secondImage !== "" && (
            <div className="max-lg:hidden">
              <Image
                src={secondImage}
                alt={`Cover Image for ${title}`}
                // className={cn('shadow-sm w-full', {
                //   'hover:shadow-lg hover:cursor-pointer transition-shadow duration-200': post.slug,
                // })}
                width={1300}
                height={630}
              />
            </div>
          )} */}
        </div>
        <div className="sm:hidden min-w-24 max-w-24 text-accent-1 font-bold pl-5 mr-5 text-md italic">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            // className="text-sm whitespace-nowrap inline"
            children={conference}
            components={{ p: "a" }}
          />
        </div>
        <div className="grow items-left md:justify-between pl-5">
          <h1 className="sm:text-xl text-lg text-bold mb-0 leading-snug">
            <div className="font-bold inline-block">
              {title}
              &ensp;

            </div>

            {/* <span className="">
              {title}
            </span> */}


          </h1>
          <div className="hidden sm:block text-accent-1 font-normal text-md italic">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              // className="text-sm whitespace-nowrap inline"
              children={conference}
              components={{ p: "a" }}
            />
          </div>

          <h3 className="text-md font-normal mb-0 leading-snug">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              // className="text-sm whitespace-nowrap inline"
              children={author.name}
              components={{ p: "a" }}
            />
          </h3>

          <h3 className="text-md font-bold mb-0 text-accent-2 leading-snug">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              // className="text-sm whitespace-nowrap inline"
              children={award}
              components={{ p: "a" }}
            />
          </h3>

          <h4 className="hidden sm:block sm:text-sm text-xs font-light leading-snug max-w-2xl">
            {/* {excerpt} */}
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              // className="text-sm font-light leading-snug max-w-lg"
              children={excerpt}
              components={{ p: "a" }}
            />&ensp;
          </h4>
          <div className="text-sm">
            <p>
              <a
                href={pdfLink}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                PDF

              </a>
              &ensp;
              <a
                href={pubLink}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                Link

              </a>

            </p>
          </div>

          {/* <article className="mb-10 prose max-lg:hidden">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className={markdownStyles["markdown"]}
              children={content}
            />
          </article> */}
          {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
        </div>
      </div>
      {/* <article className="mb-4 prose leading- lg:hidden">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className={markdownStyles["markdown"]}
          children={content}
        />
      </article> */}
    </div>
  );
};

export default ResearchPost;
