import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import './Tariffs.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfPage = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div className="page" ref={ref}>
      <Page 
        pageNumber={pageNumber} 
        width={650} 
        renderAnnotationLayer={false} 
        renderTextLayer={false} 
      />
    </div>
  );
});

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

export default function Tariffs() {
  const [numPages, setNumPages] = useState(null);
  const bookRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const nextButtonClick = () => {
    if (bookRef.current) bookRef.current.pageFlip().flipNext();
  };

  const prevButtonClick = () => {
    if (bookRef.current) bookRef.current.pageFlip().flipPrev();
  };

  return (
    <div className="tariffs-page">
      <div className="tariffs-hero">
        <h1>Tarifat</h1>
      </div>

      <div className="tariffs-container">
        <div className="breadcrumb">
          <span>&rarr; Tarifat</span>
        </div>

        <h2 className="tariffs-title">
          <u>UDHËZIM</u> <u>ADMINISTRATIV</u> <u>MD-NR.</u> <u>05</u> <u>2022</u> <u>PËR</u> <u>TARIFAT</u> <u>NOTERIALE</u>
        </h2>

        <div className="flipbook-wrapper">
          <button className="nav-arrow prev-arrow" onClick={prevButtonClick}>
            &#10094;
          </button>
          
          <div className="flipbook-container">
            <Document 
              file="/tarifat.pdf" 
              onLoadSuccess={onDocumentLoadSuccess} 
              className="pdf-document"
              loading={<div style={{color: 'white'}}>Po ngarkon dokumentin...</div>}
            >
              {numPages && (
                <HTMLFlipBook 
                  width={650} 
                  height={460} 
                  size="stretch"
                  minWidth={300}
                  maxWidth={3000}
                  minHeight={200}
                  maxHeight={2000}
                  maxShadowOpacity={0.5}
                  showCover={false}
                  mobileScrollSupport={true}
                  ref={bookRef}
                  className="html-flip-book"
                >
                  <PageCover>Tarifat Noteriale</PageCover>
                  {Array.from(new Array(numPages), (el, index) => (
                    <PdfPage key={`page_${index + 1}`} pageNumber={index + 1} />
                  ))}
                  <PageCover>Fundi i Dokumentit</PageCover>
                </HTMLFlipBook>
              )}
            </Document>
          </div>

          <button className="nav-arrow next-arrow" onClick={nextButtonClick}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
