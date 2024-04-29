import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Contact from "./pages/Contact.jsx"
import Body from './components/Body.jsx'
import Error from './components/Error.jsx'
import RestaurantMenu from "./pages/RestaurantMenu.jsx"
import Shimmer from './components/Shimmer.jsx'

const About = lazy(() => import("./pages/About.jsx"))


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>
      }
      ,{
        path: "/about",
        element: <Suspense fallback={<Shimmer/>}><About/></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ] ,
    errorElement: <Error/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
