import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import Image from 'next/image'
type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  prettyDate: string
}

const PostHeader = ({ title, coverImage, date, author, prettyDate}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      <div className="mb-8 mt-10 md:mb-16 sm:mx-0">
        {/* <CoverImage title={title} src={coverImage} /> */}
        <div className='mb-5'>
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            // className={cn('shadow-sm w-full', {
            //   'hover:shadow-lg hover:cursor-pointer transition-shadow duration-200': post.slug,
            // })}
            width={1300}
            height={630}
          />
          </div>
      </div>
      <div className="max-w-2xl mx-auto">
        {/* <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div> */}
        <div className="mb-6 text-lg font-light text-neutral-700">
          <h2>{prettyDate}</h2>
          {/* <DateFormatter dateString={date} /> */}
        </div>
      </div>
    </>
  )
}

export default PostHeader
