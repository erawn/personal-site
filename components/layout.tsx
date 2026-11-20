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
      <div className="min-h-screen flex justify-center bg-side-bg mainbackground">
        <div className="max-w-5xl bg-center-bg ">
          <div className="">
            {/* <Alert preview={preview} /> */}
            <main>{children}</main>
            {/* <Footer /> */}
          </div>

        </div>
      </div>


    </>
  );
};

export default Layout;
