
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
    <section>
      <div className="grid grid-cols-1 md:gap-x-6 lg:gap-x-16 gap-y-8 md:gap-y-8 mb-16">
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
              content={post.content}
            />
        ))}
      </div>
    </section>
  )
}

export default Publications
