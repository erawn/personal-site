import Artifact from './artifact'
type Props = {
  images: string[]
}
// <div class="columns-2 md:columns-3 lg:columns-4">
//   <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
//     <img class="w-full rounded-md" src="https://source.unsplash.com/random/1">
//   </div>
const Artifacts = ({ images }: Props) => {
  return (
    <section>
      <div className="items-center md:justify-between pl-8 mt-10">
        <h1 className="text-3xl font-thin text-center leading-10 tracking-tighter md:pl-8">
        The works-in-progress, proof-of-concepts, and exploratory creations
          </h1>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-4 gap-y-4 mb-8 mt-8">
        {images.sort((a, b) => 0.5 - Math.random()).map((img) => (
           <Artifact
           key={img}
           img={img}
         />
          
        ))}
      </div>
    </section>
  )
}

export default Artifacts
