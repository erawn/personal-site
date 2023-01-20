import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Script from "next/script";
type Props = {
  preview?: boolean;
  subpage?: string;
  children: React.ReactNode;
};

const Layout = ({ preview, subpage = "", children }: Props) => {
  return (
    <>
      <Meta subpage={subpage} />
      <div className="container">
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J5P348PSPX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J5P348PSPX');
        `}
        </Script>
      </div>
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
