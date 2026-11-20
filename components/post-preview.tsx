import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <div className="pl-4 pr-2 flex">
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
      <div className="text-md mt-2 flex-none mr-4 italic">
        <DateFormatter dateString={date} />
      </div>
      <div>
        <h3 className="text-3xl leading-snug">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>

    </div>
  );
}