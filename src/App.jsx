import { RouterProvider, createBrowserRouter } from "react-router"
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";

import Legal from "./Pages/Legal";
import CodeofConduct from "./LegalComponents/CodeofConduct";
import Privacy from "./LegalComponents/Privacy";
import TermsConditions from "./LegalComponents/TermsConditions";

import Services from "./Pages/Services"

import Career from "./Pages/Career";
import Projects from "./Pages/Projects";
import ProjectLayout from "./Pages/ProjectLayout";

import Manrekha_Residency from "./Components/ProjectsSlides/Manrekha_Residency"
import DrainageLineSarsa from "./Components/ProjectsSlides/DrainageLineSarsa"
import PoojaHandiBagInterior from "./Components/ProjectsSlides/PoojaHandiBagInterior"
import HousingProjectsPage from "./Components/ProjectsSlides/HousingProjectsPage"
import HotelRestaurantPage from "./Components/ProjectsSlides/HotelRestaurantPage"
import RoadConstructionPage from "./Components/ProjectsSlides/RoadConstructionPage"
import Contactus from "./Pages/Contactus";
import News from "./Pages/News";
import Investors from "./Pages/Investors"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/legal",
    element: <Legal/>,
    children: [
      {
      path: "CodeofConduct",
      element: <CodeofConduct/>,
      },
      {
        path: "privacy",
        element: <Privacy/>,
      },
      {
      path: "TermsConditions",
      element: <TermsConditions/>,
      }
    ]
  },
  {
    path: "/aboutus",
    element: <Aboutus/>
  },
  {
    path: "/services",
    element: <Services/>
  },
  {
    path: "/career",
    element: <Career/>
  },
  {
    path: "/projects",
    element: <ProjectLayout/>,
    children: [
      {
        path: "",
        element: <Projects/>,
      },
      {
        path: "Housing",
        element: <Manrekha_Residency/>,
      },
      {
        path: "DrainageLine",
        element: <DrainageLineSarsa/>,
      },
      {
        path: "interior",
        element: <PoojaHandiBagInterior/>,
      },
      {
        path: "Housing",
        element: <HousingProjectsPage/>,
      },
      {
        path: "Restaurant_Hotel",
        element: <HotelRestaurantPage/>,
      },
      {
        path: "roads",
        element: <RoadConstructionPage/>,
      },
    ]
  },
  {
    path:"/contactus",
    element: <Contactus/>
  },
  {
    path:"/news",
    element: <News/>
  },
  {
    path:"/investors",
    element: <Investors/>
  },
])

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
