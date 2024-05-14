import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { RootLayout } from "./layout/RootLayout"
import { Home } from "./pages/Home"
import Login from "./pages/Login"
import DashBoard from "./student/Dashboard"
import Layout from "./student/Layout"
import { createContext, useState } from "react"
import Courses from "./student/Courses"
import VideoPlayer from "./student/VideoPlayer"
import Chat from "./student/Chat"
import Assessment from "./student/Assessment"
import Attendance from "./student/Attendance"
import Profile, { profileAction } from "./student/Profile"
import CourseVideos from "./student/CourseVideos"

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
                 <Route path="video/:id?" element={<VideoPlayer />} />
                 <Route path="chat" element={<Chat />} />
                 <Route path="assessment" element={<Assessment/>} />
                 <Route path="attendance" element={<Attendance/>} />
                 <Route path="profile" element={<Profile/>} action={profileAction} />
                 <Route path="course/:id" element={<CourseVideos/>}  />
                 
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