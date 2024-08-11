import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Guia from "./pages/Guia"
import Integrantes from "./pages/Integrantes"
import Materiais from "./pages/Materiais"
import Bibliografias from "./pages/Bibliografias"

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>, 
  },

  {
    path: "/GuiaDeUso",
    element: <Guia/>,
  },
  {
    path: "/Integrantes",
    element: <Integrantes/>
  },
  {
    path: "/Materiais",
    element: <Materiais/>,
  },
  {
    path: "/Bibliografias",
    element: <Bibliografias/>,
  }
])




export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
