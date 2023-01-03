import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { setPDFWorker } from '../lib/api'
import path from 'path';
import fs from 'fs';
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { RESUME_PATH } from '../lib/constants'


export default function Index({ allPosts }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
//https://codesandbox.io/s/react-pdf-next-js-forked-x12d2?file=/package.json
  const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
    ssr: false
  });

  return (
    <>
      <Layout>
        <Head>
          <title>Eric Rawn Portfolio</title>
        </Head>
        <Header/>
        <Container>
     
          <div className='flex flex-col justify-items-start'>
           
          <Link href={RESUME_PATH} className="text-red-600 text-2xl ml-4 mt-10 mb-0 text-center object-center">
              (Download PDF)
            </Link>
          <div>
            <PDFViewer pdfPath={RESUME_PATH}/>
          </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

