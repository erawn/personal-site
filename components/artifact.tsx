import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import Image from 'next/image'
type Props = {
  img: string
}

const Artifact = ({
  img
}: Props) => {
  return (
    <div className="relative w-full mb-4 before:absolute">
      <Image
        src={img}
        alt={`Artifact Image`}
        className={"rounded-md"}
        width={1300}
        height={630}
      />
    </div>
  )
}

export default Artifact
