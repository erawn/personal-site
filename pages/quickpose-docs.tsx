import Head from "next/head";
import Header from "../components/Quickpose/header";
import { Anchor, Row, Col, ConfigProvider } from "antd";
import Meta from "../components/meta";
import Footer from "../components/Quickpose/footer";
import { useState } from "react";
import DocsContent, { DocsItems } from "../components/Quickpose/docs-content";
import { getDocFiles } from "../lib/api";
import Layout from "../components/Quickpose/layout";
const darkGrey = "#1b2024";
const quickpose = {
  10: "#89F8FE",
  20: "#84EEFE",
  30: "#7FE4FE",
  40: "#7AD9FE",
  50: "#75CEFF",
  60: "#6FC1FF",
  70: "#6AB4FF",
  80: "#65A5FF",
};
type Items = {
  [key: string]: string;
};
type Props = {
  allEntries: Items[];
};
export default function Index({ allEntries }: Props) {
  const [selectedLabel, setSelectedLabel] =
    useState<string>("#getting-started");

  // let getCurrentAnchor = () => ;
  const onChange = (link: string) => {
    console.log("Anchor:OnChange", link);
    setSelectedLabel(link);
  };
  return (
    <div className="bg-darkGrey">
      <Layout subpage="quickpose/">
        <Head>
          <title>Quickpose: A Version Control Tool for Processing</title>
        </Head>
        <Header />

        <section className="bg-darkGrey text-white flex">
          <div className="grid sm:grid-cols-[200px_auto] max-sm:grid-flow-col-dense">
            <div className="max-sm:hidden">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#7FE4FE",
                    colorTextBase: "#FFFFFF",
                    colorPrimaryBg: darkGrey,
                    fontSize: 17,
                    lineWidth: 3,
                    borderRadius: 10,
                    borderRadiusSM: 10,
                  },
                }}
              >
                <Anchor
                  className="text-white  pt-2 font-LibreFranklin text-xl"
                  offsetTop={60}
                  targetOffset={200}
                  onChange={onChange}
                  items={DocsItems()}
                />
              </ConfigProvider>
            </div>
            <div className="max-sm:pl-3">
              <DocsContent entries={allEntries} />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const allEntries = getDocFiles();

  return {
    props: { allEntries },
  };
};
