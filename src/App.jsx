import { RouterProvider, createBrowserRouter } from "react-router"
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";

import Legal from "./Pages/Legal";
import CodeofConduct from "./LegalComponents/CodeofConduct";
import Privacy from "./LegalComponents/Privacy";
import TermsConditions from "./LegalComponents/TermsConditions";

import ServiceLayout from "./Components/Services/ServiceLayout"

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
    path: "/Service",
    element: <ServiceLayout/>
  }
])

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
