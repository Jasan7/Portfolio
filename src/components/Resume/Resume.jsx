import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./Resume.module.css";
import pdf from "./../../assets/Jasandeep_Resume.pdf";
import { FaDownload } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(800);
  const [pdfError, setPdfError] = useState(false);
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
        {!pdfError && (
          <Document
            file={`${window.location.origin}${pdf}`}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={(err) => {
              console.error("PDF failed to load:", err);
              setPdfError(true);
            }}
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
        )}
        {pdfError && (
          <p style={{ color: "#ff7675", textAlign: "center" }}>
            PDF preview not supported on this device. Please download it below.
          </p>
        )}
      </div>

      <a
        href={`${window.location.origin}${pdf}`}
        download
        className={styles.downloadBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDownload /> Download Resume
      </a>
    </section>
  );
};

export default Resume;
