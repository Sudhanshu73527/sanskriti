import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/Applayout";
import App from "../App";

import AboutSchool from "../pages/about/AboutSchool";
import ChairmanMessage from "../pages/about/ChairmanMessage";
import Visionmission from "../pages/about/Visionmission";
import OurInfrastructure from "../pages/about/OurInfrastructure";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <App /> },   // 👈 Home page
      { path: "about-school", element: <AboutSchool /> },
      { path: "chairman-message", element: <ChairmanMessage /> },
      {path: "/visionmission", element: <Visionmission/>},
      {path: "/Infrastructure", element: <OurInfrastructure/>},
    ],
  },
]);

export default router;
