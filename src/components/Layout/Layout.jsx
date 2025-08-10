import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <ScrollToTop />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
