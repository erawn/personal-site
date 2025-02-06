import Footer from "./footer";
import Meta from "./meta";
type Props = {
  preview?: boolean;
  subpage?: string;
  children: React.ReactNode;
};

const Layout = ({ preview, subpage = "", children }: Props) => {
  return (
    <>
      <Meta subpage={subpage} />
      <div className="min-h-screen">
        <div className="max-w-4xl">
          {/* <Alert preview={preview} /> */}
          <main>{children}</main>
        </div>
      </div>
    
      <Footer />
    </>
  );
};

export default Layout;
