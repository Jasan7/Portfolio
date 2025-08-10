import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./../components/Home/Home";
import About from "./../components/About/About";
import Projects from "./../components/Projects/Projects";
import Layout from "../components/Layout/Layout";
import Resume from "../components/Resume/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "resume", element: <Resume /> },
      { path: "*", element: <Navigate to="/" replace /> }, 
    ],
  },
]);