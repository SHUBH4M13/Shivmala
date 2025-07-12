import { RouterProvider, createBrowserRouter } from "react-router"
import Home from "./Pages/Home";

import Legal from "./Pages/Legal";
import CodeofConduct from "./LegalComponents/CodeofConduct";
import Privacy from "./LegalComponents/Privacy";
import TermsConditions from "./LegalComponents/TermsConditions";



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
  }
])

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
