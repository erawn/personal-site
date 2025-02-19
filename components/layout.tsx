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
      <div className="min-h-screen flex justify-center bg-slate-500">
        <div className="max-w-4xl bg-slate-200 ">
          {/* <Alert preview={preview} /> */}
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    
 
    </>
  );
};

export default Layout;
