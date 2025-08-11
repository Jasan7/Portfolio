import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "./../../assets/loading.json";
import styles from "./Loader.module.css";

export default function Loader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [size, setSize] = useState(window.innerWidth > 768 ? 400 : 300);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1500);

    const handleResize = () => {
      setSize(window.innerWidth > 768 ? 400 : 300);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${styles.loaderOverlay} ${fadeOut ? styles.hidden : ""}`}>
      <Lottie animationData={loaderAnimation} style={{ width: size }} loop />
    </div>
  );
}
