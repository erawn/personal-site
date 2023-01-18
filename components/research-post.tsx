import type Author from '../interfaces/author'
import Image from 'next/image'
import remarkGfm from 'remark-gfm'
import markdownStyles from './pub-styles.module.css'
import ReactMarkdown from 'react-markdown'
type Props = {
  title: string
  coverImage: string
  secondImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  content: string
}

const ResearchPost = ({
  title,
  coverImage,
  secondImage,
  date,
  excerpt,
  author,
  slug,
  content
}: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:gap-x-6 lg:gap-x-16 gap-y-4 md:gap-y-4 mt-5 mb-0 '>
              <div className="mr-5 min-w-fit">
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
                <div>
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
              </div>
              <div>
                <h1 className="text-3xl text-bold mb-3 leading-snug">
                  {title}
                </h1>
                <h3 className="text-2xl font-thin mb-3 leading-snug">
                  {author.name}
                </h3>
                <article className="mb-4 prose leading-0 ">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className={markdownStyles['markdown']}
                    children={content}
                    />
                </article>
                  
                {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
              </div>
            </div>
  )
}

export default ResearchPost

