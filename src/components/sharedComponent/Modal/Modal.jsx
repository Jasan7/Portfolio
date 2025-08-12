import { useState, useEffect } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, onPrev, onNext, children }) {
  const [closing, setClosing] = useState(false);
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setClosing(false);
    } else if (show) {
      setClosing(true);
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, show]);

  if (!show) return null;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`${styles.modalOverlay} ${closing ? styles.fadeOut : ""}`}
      onClick={handleClose}
    >
      <div
        className={`${styles.modalContent} ${closing ? styles.fadeOut : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleClose} className={styles.closeIcon}>
          <FaTimes />
        </button>

        <div className={styles.modalBody}>{children}</div>

        {(onPrev || onNext) && (
          <div className={styles.navButtons}>
            {onPrev && (
              <button onClick={onPrev} className={styles.navBtn}>
                <FaArrowLeft />
              </button>
            )}
            {onNext && (
              <button onClick={onNext} className={styles.navBtn}>
                <FaArrowRight />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
