import type Author from '../interfaces/author'
import Image from 'next/image'
type Props = {
  title: string
  coverImage: string
  secondImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const ResearchPost = ({
  title,
  coverImage,
  secondImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:gap-x-6 lg:gap-x-16 gap-y-8 md:gap-y-8 m-5 mb-16 '>
              <div className="m-5 min-w-fit">
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
                <h3 className="text-2xl mb-3 leading-snug">
                  {author.name}
                </h3>
                <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
              </div>
            </div>
  )
}

export default ResearchPost

