import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import WebDevelopment from "../pages/webDevelopment/WebDevelopment";
import Contact from "../pages/contact/Contact";
import GraphicsDesign from "../pages/graphics/GraphicsDesign";
import Seo from "../pages/seo/Seo";
import Marketing from "../pages/Marketing/Marketing";
import Orders from "../pages/Orders/Orders";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/web-development",
        element: <WebDevelopment />,
      },
      {
        path: "/graphics-design",
        element: <GraphicsDesign />,
      },
      {
        path: "/seo",
        element: <Seo />,
      },
      {
        path: "/digital-marketing",
        element: <Marketing />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
