import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <section className='grid grid-cols-1 sm:grid-cols-2 items-center'>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight align-middle pl-4 md:pl-4 pt-4">
          Eric Rawn
        </h1>
        <section className='text-2 md:text-2xl tracking-tighter text-center leading-tight md:pl-4 pt-4'>
          <ul className="flex float-right">
            <li className="mr-6">
              <a className=" hover:text-gray-500" href="/">Work</a>
            </li>
            <li className="mr-6">
              <a className=" hover:text-gray-500" href="/research">Publications</a>
            </li>
            <li className="mr-6">
              <a className= " hover:text-gray-500" href="/artifacts">Artifacts</a>
            </li>
            <li className="mr-6">
              <a className=" hover:text-gray-500" href="/resume">Resume</a>
            </li>
            <li className="mr-6">
              <a className=" text-quickpose-80 hover:text-quickpose-10" href="/quickpose">Quickpose</a>
            </li>
          </ul>
        </section>
      </section>
  </header>
  )
}

export default Header