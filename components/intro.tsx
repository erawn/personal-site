import Image from "next/image"
import headshot from "../public/assets/headshot.jpeg"
import github from "../public/assets/icons/github.svg"
import email from "../public/assets/icons/email.svg"
import googlescholar from "../public/assets/icons/googlescholar.svg"
const Intro = () => {
  return (
    <div className="max-w-4xl mb-10">
      <section className="flex gap-y-8 mt-4 mb-12 ml-4">
        <div className="flex-none max-w-sm">
          <Image
            src={headshot}
            alt={`Cover Image for cover image`}
            width={200}
            height={630}
            className="rounded-full border-spacing-10px"
            priority
          />
        </div>
        <div>
        </div>
        <div className="grow pl-5 self-center">
          <h1 className="text-left text-4xl font-bold tracking-tighter leading-tight">
            Hi! I'm Eric.
          </h1>
          <h4 className="text-left text-sm mt-1">
            PhD Student at UC Berkeley in Computer Science, advised by <a
              href="https://schasins.com/"
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              Sarah Chasins
            </a>.
          </h4>

          <h4 className="text-left text-sm mt-1 ">
            <p>        <a
              href="erawn at berkeley dot edu"
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              <span className="">
              <Image className="w-3 whitespace-nowrap inline" unoptimized width={12} height={12} src={email} alt={"An Email Icon"}></Image>
                
              </span>
              erawn at berkeley dot edu

            </a>. </p>


            <p>
              <a
                href="https://scholar.google.com/citations?user=GupuwssAAAAJ&hl=en&oi=ao"
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                
                <span className="whitespace-nowrap">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 whitespace-nowrap inline">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg> */}
                  <Image className="w-3 whitespace-nowrap inline" unoptimized width={12} height={12} src={googlescholar} alt={"A Google Scholar Icon"}></Image>
                </span>
                
                Google Scholar

              </a>.
            </p>

            <p>
              <a
                href="https://github.com/erawn"
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                <span className="">
                <Image className="w-3 whitespace-nowrap inline" unoptimized width={12} height={12} src={github} alt={"A Github Icon"}></Image>
                 

                </span>
                Github

              </a>.
            </p>



          </h4>

        </div>



      </section>

      <section className="items-left md:justify-between pl-8 mt-4 pr-8">

        <h4 className="text-left md:text-left text-md mt-5 md:pl-8 font-extralight">
          I study <b className="italic text-accent-1">programming practice:</b> how people use programs to learn about the world and think through their work. Using long-term qualitative methods, like participant observation, codesign, and in-situ deployments, I develop programming language interventions and programming systems for scientists, data analysts, and artists.

          <br /><br />
          I also have interests in the intellectual history of HCI, the politics of computing, and philosophical discussions around action and practical reason.
        </h4>
      </section>
    </div>
  )
}

export default Intro

