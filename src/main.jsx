import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarBackground from "./components/StarBackground/StarBackground.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <StarBackground />
    <App />
  </>
);
