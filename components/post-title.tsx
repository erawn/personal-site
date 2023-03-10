import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight md:leading-none mt-0 mb-0 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
