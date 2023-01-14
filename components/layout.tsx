import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  subpage?: string
  children: React.ReactNode
}

const Layout = ({ preview, subpage = '', children }: Props) => {
  return (
    <>
      <Meta subpage={subpage}/>
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
