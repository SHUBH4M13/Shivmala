import { BrowserRouter , RouterProvider, createBrowserRouter } from "react-router"
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
