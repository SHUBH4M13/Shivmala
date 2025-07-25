import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import LoadingSpinner from "./Components/LoadingSpinner"

// Lazy-loaded pages
const Home = lazy(() => import("./Pages/Home"));
const Aboutus = lazy(() => import("./Pages/Aboutus"));
const Legal = lazy(() => import("./Pages/Legal"));
const CodeofConduct = lazy(() => import("./LegalComponents/CodeofConduct"));
const Privacy = lazy(() => import("./LegalComponents/Privacy"));
const TermsConditions = lazy(() => import("./LegalComponents/TermsConditions"));
const Services = lazy(() => import("./Pages/Services"));
const Career = lazy(() => import("./Pages/Career"));
const Projects = lazy(() => import("./Pages/Projects"));
const ProjectLayout = lazy(() => import("./Pages/ProjectLayout"));
const Manrekha_Residency = lazy(() => import("./Components/ProjectsSlides/Manrekha_Residency"));
const DrainageLineSarsa = lazy(() => import("./Components/ProjectsSlides/DrainageLineSarsa"));
const PoojaHandiBagInterior = lazy(() => import("./Components/ProjectsSlides/PoojaHandiBagInterior"));
const HousingProjectsPage = lazy(() => import("./Components/ProjectsSlides/HousingProjectsPage"));
const HotelRestaurantPage = lazy(() => import("./Components/ProjectsSlides/HotelRestaurantPage"));
const RoadConstructionPage = lazy(() => import("./Components/ProjectsSlides/RoadConstructionPage"));
const Contactus = lazy(() => import("./Pages/Contactus"));
const News = lazy(() => import("./Pages/News"));
const Investors = lazy(() => import("./Pages/Investors"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/legal",
    element: <Legal />,
    children: [
      { path: "CodeofConduct", element: <CodeofConduct /> },
      { path: "privacy", element: <Privacy /> },
      { path: "TermsConditions", element: <TermsConditions /> }
    ]
  },
  {
    path: "/aboutus",
    element: <Aboutus />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/career",
    element: <Career />
  },
  {
    path: "/projects",
    element: <ProjectLayout />,
    children: [
      { path: "", element: <Projects /> },
      { path: "Housing", element: <HousingProjectsPage /> },
      { path: "DrainageLine", element: <DrainageLineSarsa /> },
      { path: "interior", element: <PoojaHandiBagInterior /> },
      { path: "Restaurant_Hotel", element: <HotelRestaurantPage /> },
      { path: "roads", element: <RoadConstructionPage /> },
    ]
  },
  {
    path: "/contactus",
    element: <Contactus />
  },
  {
    path: "/news",
    element: <News />
  },
  {
    path: "/investors",
    element: <Investors />
  }
]);

function App() {
  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
