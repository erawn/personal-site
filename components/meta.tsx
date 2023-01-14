import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
interface defaultProps {
  subpage?:string
}


const Meta = ({subpage = ''}:defaultProps) => {
  function renderTitle(subpage){
    switch (subpage){
      case '':
        return <>
        <meta name="description" content={`Eric Rawn's Portfolio Site`} />
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        <meta property="og:title" content="Eric Rawn's Portfolio Site" ></meta>
        </>;
      case 'quickpose/':
        return <>
        <meta name="description" content={`Quickpose: A Version Control Tool for Processing`} />
        <meta property="og:image" content={"https://github.com/erawn/Quickpose/blob/ab4f533c0e6f3f2c45337b2157b81a9e43fff7bc/assets/quickpose-social.png?raw=true"} />
        <meta property="og:title" content="Quickpose: A Version Control Tool for Processing" ></meta>
        </>;
    }
   
  }
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={"/favicon/"+subpage+"apple-touch-icon.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={"/favicon/"+subpage+"favicon-32x32.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={"/favicon/"+subpage+"favicon-16x16.png"}
      />
      <link rel="manifest" href={"/favicon/"+subpage+"site.webmanifest"} />
      <link
        rel="mask-icon"
        href={"/favicon/"+subpage+"safari-pinned-tab.svg"}
        color="#000000"
      />
      <link rel="shortcut icon" href={"/favicon/"+subpage+"favicon.ico"} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content={"/favicon/"+subpage+"browserconfig.xml"} />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      {renderTitle(subpage)}
     
    </Head>
  )
}

export default Meta
