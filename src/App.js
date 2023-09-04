import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { RootLayout } from "./layout/RootLayout"
import { Home } from "./pages/Home"
import Login from "./pages/Login"
import DashBoard from "./student/Dashboard"
import Layout from "./student/Layout"
import { createContext, useState } from "react"
import Courses from "./student/Courses"
import VideoPlayer from "./student/VideoPlayer"

export const openContext = createContext()



export default function App() {
  const [open, setOpen] = useState(false);

  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path="/" element={<RootLayout />} >
              <Route index element={ <Home />} />
              <Route path="login" element={ <Login />} />

              <Route path="student" element={ <Layout />} >
                 <Route index element={<DashBoard />} />
                 <Route path="course" element={<Courses />} />
                 <Route path="video" element={<VideoPlayer />} />
                 
              </Route>
          </Route>
      )
  )

  return (
    <openContext.Provider value={[open, setOpen]} >
      <RouterProvider router={router}/>
    </openContext.Provider>
  )
}