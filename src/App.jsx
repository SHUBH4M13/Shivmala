import { RouterProvider, createBrowserRouter } from "react-router"
import Home from "./Pages/Home";

import Legal from "./Pages/Legal";
import CodeofConduct from "./Components/LegalComponents/CodeofConduct";
import Privacy from "./Components/LegalComponents/Privacy";


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
      path: "CodeofConduct",
      element: <CodeofConduct/>,
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
