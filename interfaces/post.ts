import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  secondImage: string
  author: Author
  excerpt: string
  prettyDate: string
  ogImage: {
    url: string
  }
  content: string
  type: string
}

export default PostType
