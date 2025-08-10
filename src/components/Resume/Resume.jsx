import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./Resume.module.css";
import pdf from "./../../assets/Jasandeep_Resume.pdf";
import { FaDownload } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(800);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setPageWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className={styles.resumeSection}>
      <div className={styles.resumeViewer} ref={containerRef}>
        <Document
          file={pdf}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className={styles.document}
        >
          <Page
            pageNumber={1}
            width={pageWidth}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            className={styles.pdfPage}
          />
        </Document>
      </div>

      <a href={pdf} download className={styles.downloadBtn}>
        <FaDownload /> Download Resume
      </a>
    </section>
  );
};

export default Resume;
