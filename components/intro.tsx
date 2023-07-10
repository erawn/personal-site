import Image from "next/image"
const Intro = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between md:gap-y-8 mt-4 mb-16 md:mb-12 pl-10 ">
      <Image
      src={'/assets/inkdrop.jpg'}
      alt={`Cover Image for cover image`}
      width={1300}
      height={630}
      priority
    />
      <section className="items-left md:justify-between pl-8 mt-4 pr-8">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pl-8">
            Hi! I'm Eric.
        </h1>
        <h4 className="text-left md:text-left text-lg mt-5 md:pl-8">
          I'm a CS PhD Student at UC Berkeley in Human-Computer Interaction. I study <b className="font-bold">programming process:</b> how people work with programs over time
          to experiment, compare, reflect, and understand the history of their code. I am especially interested in building tools for 
          highly exploratory domains of programming, like creative coding and data science. I work with <a
              href="http://www.paulos.net/"
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              Eric Paulos
            </a>  and <a
              href="https://schasins.com/"
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              Sarah Chasins
            </a>. 


        <br/><br/>
          I also have interests in the Intellectual History of HCI, the politics of computing, and philosophies of history and mind. 
          Previously at Stanford and  <a
              href="https://www.shapertools.com"
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              Shaper
            </a>. 
            <br/><br/>
          <p className="">
          The best way to contact me is emailing : erawn~at~berkeley~dot~edu
          </p>
        </h4>
      </section>
    </section>
  )
}

export default Intro

