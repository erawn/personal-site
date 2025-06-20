import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-center-bg border-neutral-200">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row items-left">
          <h3 className="text-md tracking-tighter leading-tight text-left lg:text-left mb-0 ml-5 lg:mb-0 lg:pr-4 lg:w-1/2">
            Eric Rawn <a className='text-sm'>(he / they) </a>

            <br></br>
            erawn at berkeley dot edu
          </h3>
          {/* <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div> */}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
