
import type Post from '../interfaces/post'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import ResearchPost from './research-post'
type Props = {
  posts: Post[]
}

const Publications = ({ posts }: Props) => {
  return (
    <section className=''>
      {/* <div className="grid grid-cols-1 md:gap-x-2 lg:gap-x-10 gap-y-1 md:gap-y-1 mb-16"> */}
       <div className='flex'> 
        <div className=''>
        {posts.map((post) => (
          <ResearchPost
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              secondImage={post.secondImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              conference={post.conference}
              pdfLink={post.pdfLink}
              pubLink={post.pubLink}
              content={post.content}
            />
        ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
