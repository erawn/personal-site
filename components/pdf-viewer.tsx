// import React from 'react';

// import {
//   Document, Page,
// } from 'react-pdf/dist/esm/entry.webpack';

// const PdfViewer = ({
//   url, width, pageNumber
// }) => (
//   <Document file={url}>
//     <Page
//       pageNumber={pageNumber}
//       width={width}
//     />
//   </Document>
// );

// export default PdfViewer;
import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
  const [file, setFile] = useState("/assets/resume_Oct2022.pdf");
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="">
      {/* <div>
        <label htmlFor="file">Load from file:</label>{" "}
        <input onChange={onFileChange} type="file" />
      </div> */}
      <div className="ml-1">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
         
            {Array.from({ length: numPages }, (_, index) => (
               <div className="w-full">
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                scale={4}
                
              />
                 </div>
            ))}
       
          
        </Document>
      </div>
    </div>
  );
}
