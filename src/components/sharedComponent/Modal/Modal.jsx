import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, onPrev, onNext, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeIcon}>
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
