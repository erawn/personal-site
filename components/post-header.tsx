import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import Image from 'next/image'
import Link from 'next/link'
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
      <div className='flex content-center justify-left mt-10'>
        <Link href="/" passHref>
          <button className="font-bold py-0 px-0 pt-1 rounded fill-black hover:fill-gray-400 duration-300">
            <svg className="w-9 h-9 mr-2" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
              <path d="m42 630 382.8 382.8c16.801 16.801 43.199 16.801 58.801 0 16.801-16.801 16.801-43.199 0-58.801l-312-312h956.4c22.801 0 42-19.199 42-42s-19.199-42-42-42h-955.2l312-312c16.801-16.801 16.801-43.199 0-58.801-8.3984-8.3984-19.199-12-30-12s-21.602 3.6016-30 12l-382.8 382.8c-8.3984 8.3984-12 18-12 30s4.8008 21.602 12 30z"/>
            </svg>
          </button>
        </Link>
        <PostTitle>{title}</PostTitle>
      </div>
      
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
