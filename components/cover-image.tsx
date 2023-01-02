import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div className='relative group'>
      <Link href={"/posts/"+slug}>
        <Image
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('shadow-sm w-full', {
              'hover:shadow-lg hover:cursor-pointer transition-shadow duration-200': slug,
            })}
            width={1300}
            height={630}
          />
        <div className ="opacity-0 group-hover:opacity-70 duration-300 absolute inset-0 flex justify-center items-center text-2xl bg-gray-200 text-black font-semibold ">
          <h1 className= 'tracking-wider text-2xl md:text-2xl text-center'>{title}</h1>
        </div>
      </Link>
    </div>
  )
  return (    
    <div className="sm:mx-0">
      {image}
    </div>
  )
}

export default CoverImage
