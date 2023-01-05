import Image from "next/image"
const Intro = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between md:gap-y-8 mt-4 mb-16 md:mb-12">
      <Image
      src={'/assets/inkdrop.jpg'}
      alt={`Cover Image for cover image`}
      width={1300}
      height={630}
      priority
    />
      <section className="items-left md:justify-between pl-8 mt-4">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pl-8">
            Hi! I'm Eric.
        </h1>
        <h4 className="text-left md:text-left text-lg mt-5 md:pl-8">
          I’m an HCI researcher, digital/installation artist, sound+lights+projection technician, and maker. 
          Computer Science PhD Student at UC Berkeley studying Human-Computer Interaction. 
          Thinking about aesthetics, technology, making (good on) our values. 
          Previously at Stanford and  <a
              href="https://www.shapertools.com"
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              Shaper
            </a>. 

          <p className="my-4">
          Currently interested in version control, creative programming, and the intellectual history of HCI. 
          </p>
          <p className="">
          The best way to contact me is emailing : erawn~at~berkeley~dot~edu
          </p>
        </h4>
      </section>
    </section>
  )
}

export default Intro
