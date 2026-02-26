import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/Applayout";
import App from "../App";

import AboutSchool from "../pages/about/AboutSchool";
import ChairmanMessage from "../pages/about/ChairmanMessage";
import Visionmission from "../pages/about/Visionmission";
import OurInfrastructure from "../pages/about/OurInfrastructure";
import Gallary from "../pages/gallary/Gallary";
import Rte from "../pages/about/Rte";
import Admissionprocess from "../pages/admission/Admissionprocess";
import Onlineregistrartion from "../pages/admission/Onlineregistrartion";
import Teacherdetails from "../pages/about/Teacherdetails";
import Admissionnotification from "../pages/admission/Admissionnotification";

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
      {path: "/gallery", element: <Gallary/>},
      {path: "/rte", element: <Rte/>},
      {path: "/admission-process", element: <Admissionprocess/>},
      {path: "/online-registration", element: <Onlineregistrartion/>},
      {path: "/teacher", element: <Teacherdetails/>},
      {path: "/notification", element: <Admissionnotification/>},
    ],
  },
]);

export default router;
