import Image from "next/image"
const Intro = () => {
  return (
    <div className="max-w-4xl mb-10">
      <section className="flex gap-y-8 mt-4 mb-12 ml-4">
        <div className="flex-none max-w-sm">
          <Image
            src={'/assets/headshot.jpeg'}
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 whitespace-nowrap inline">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /> </svg>
              </span>
              erawn at berkeley dot edu

            </a>. </p>


            <p>
              <a
                href="https://scholar.google.com/citations?user=GupuwssAAAAJ&hl=en&oi=ao"
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                <span className="whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 whitespace-nowrap inline">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>

                </span>
                Google Scholar

              </a>.
            </p>

            <p>
              <a
                href="https://scholar.google.com/citations?user=GupuwssAAAAJ&hl=en&oi=ao"
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                <span className="">
                  <svg viewBox="0 0 96 98" xmlns="http://www.w3.org/2000/svg" className="w-3 whitespace-nowrap inline">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f" />
                  </svg>

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

