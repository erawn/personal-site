
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

type Props = {
  pdfPath:string
}

export default function PDFViewer({pdfPath}: Props) {
  const [file, setFile] = useState(pdfPath);
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
