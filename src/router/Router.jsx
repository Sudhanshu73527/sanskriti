import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/Applayout";

/* Pages */
// import Home from "../pages/Home";

/* About */
import AboutSchool from "../pages/about/AboutSchool";
import App from "../App";
import ChairmanMessage from "../pages/about/ChairmanMessage";
// import PrincipalMessage from "../pages/about/PrincipalMessage";

// /* Academics */
// import PrePrimary from "../pages/academics/PrePrimary";
// import Primary from "../pages/academics/Primary";
// import Secondary from "../pages/academics/Secondary";
// import SeniorSecondary from "../pages/academics/SeniorSecondary";

// /* Admission */
// import AdmissionProcess from "../pages/admission/AdmissionProcess";
// import FeeStructure from "../pages/admission/FeeStructure";
// import OnlineRegistration from "../pages/admission/OnlineRegistration";

// /* Facilities */
// import Library from "../pages/facilities/Library";
// import Laboratory from "../pages/facilities/Laboratory";
// import Transport from "../pages/facilities/Transport";
// import Sports from "../pages/facilities/Sports";

// /* Others */
// import Gallery from "../pages/Gallery";

// /* Extra Curriculum */
// import Music from "../pages/extracurriculum/Music";
// import Dance from "../pages/extracurriculum/Dance";
// import Yoga from "../pages/extracurriculum/Yoga";
// import ArtCraft from "../pages/extracurriculum/ArtCraft";

// /* Mandatory Disclosure */
// import CBSEInfo from "../pages/mandatory/CBSEInfo";
// import StaffDetails from "../pages/mandatory/StaffDetails";
// import Affiliation from "../pages/mandatory/Affiliation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    element : <App/>,
    children: [
    //   { path: "/", element: <Home /> },

      /* ABOUT US */
      { path: "/about-school", element: <AboutSchool /> },
      { path: "/chairman-message", element: <ChairmanMessage /> },
    //   { path: "/principal-message", element: <PrincipalMessage /> },

    //   /* ACADEMICS */
    //   { path: "/academics/pre-primary", element: <PrePrimary /> },
    //   { path: "/academics/primary", element: <Primary /> },
    //   { path: "/academics/secondary", element: <Secondary /> },
    //   { path: "/academics/senior-secondary", element: <SeniorSecondary /> },

    //   /* ADMISSION */
    //   { path: "/admission-process", element: <AdmissionProcess /> },
    //   { path: "/fee-structure", element: <FeeStructure /> },
    //   { path: "/online-registration", element: <OnlineRegistration /> },

    //   /* FACILITIES */
    //   { path: "/facilities/library", element: <Library /> },
    //   { path: "/facilities/laboratory", element: <Laboratory /> },
    //   { path: "/facilities/transport", element: <Transport /> },
    //   { path: "/facilities/sports", element: <Sports /> },

    //   /* GALLERY */
    //   { path: "/gallery", element: <Gallery /> },

    //   /* EXTRA CURRICULUM */
    //   { path: "/extra-curriculum/music", element: <Music /> },
    //   { path: "/extra-curriculum/dance", element: <Dance /> },
    //   { path: "/extra-curriculum/yoga", element: <Yoga /> },
    //   { path: "/extra-curriculum/art-craft", element: <ArtCraft /> },

    //   /* MANDATORY DISCLOSURE */
    //   { path: "/mandatory/cbse-info", element: <CBSEInfo /> },
    //   { path: "/mandatory/staff-details", element: <StaffDetails /> },
    //   { path: "/mandatory/affiliation", element: <Affiliation /> },
    ],
  },
]);

export default router;
