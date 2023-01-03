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
    <div className='relative block group object-cover'>
      <Link href={"/posts/"+slug} className="relative block h-80 w-100">
        <Image
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('rounded-md shadow-sm w-full object-cover', {
              'hover:shadow-lg object-fit:cover hover:cursor-pointer transition-shadow duration-200': slug,
            })}
            fill={true}
          />
        <div className ="opacity-0 group-hover:opacity-70 duration-300 absolute inset-0 flex justify-center items-center text-2xl bg-gray-200 text-black font-semibold ">
          <h1 className= 'tracking-wider text-2xl md:text-2xl text-center'>{title}</h1>
        </div>
      </Link>
    </div>
  )
  return (    
    <div className="">
      {image}
    </div>
  )
}

export default CoverImage
