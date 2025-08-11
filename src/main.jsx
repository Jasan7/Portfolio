import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarBackground from "./components/StarBackground/StarBackground.jsx";
import Loader from "./components/Loader/Loader.jsx";

function MainApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // match Loader timing
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <StarBackground />
      <App />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<MainApp />);
