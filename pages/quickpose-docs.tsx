import Head from "next/head";
import Header from "../components/Quickpose/header";
import { Anchor, Row, Col, ConfigProvider } from "antd";
import Meta from "../components/meta";
import Footer from "../components/Quickpose/footer";
import styled from "styled-components";
export default function Index() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7FE4FE",
          colorTextBase: "#FFFFFF",
        },
      }}
    >
      <div className="">
        <Meta subpage={"quickpose/"} />
        <Head>
          <title>Quickpose: A Version Control Tool for Processing</title>
        </Head>
        <div className="sticky top-0 h-15">
          <Header />
        </div>

        <section className="bg-darkGrey text-white">
          <Row>
            <Col span={4}>
              <Anchor
                className="text-white"
                offsetTop={60}
                items={[
                  {
                    key: "part-1",
                    href: "#part-1",
                    title: "Part 1",
                  },
                  {
                    key: "part-2",
                    href: "#part-2",
                    title: "Part 2",
                  },
                  {
                    key: "part-3",
                    href: "#part-3",
                    title: "Part 3",
                    children: [
                      {
                        key: "4",
                        href: "#anchor-props",
                        title: "Anchor Props",
                      },
                      {
                        key: "5",
                        href: "#link-props",
                        title: "Link Props",
                      },
                    ],
                  },
                ]}
              />
            </Col>
            <Col span={20}>
              <div
                id="part-1"
                style={{ height: "100vh", background: "rgba(255,0,0,0.02)" }}
              />
              <div
                id="part-2"
                style={{ height: "100vh", background: "rgba(0,255,0,0.02)" }}
              />
              <div
                id="part-3"
                style={{ height: "100vh", background: "rgba(0,0,255,0.02)" }}
              />
            </Col>
          </Row>
        </section>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
