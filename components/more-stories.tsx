import { PostPreview } from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}


export function MoreStories({ posts }: Props) {
  return (
    <section>
      <div className="grid grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-0 md:gap-y-10 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
