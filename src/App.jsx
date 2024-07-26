import { Outlet, RouterProvider, createBrowserRouter, useRouteError } from "react-router-dom"
import { AppContext } from "./context/ContextApi"
import VideoPlayer from "./pages/VideoPlayer"
import Feed from "./pages/Feed";
import NavBar from "./component/NavBar"
const ErrorPage = () => {
  const error= useRouteError();
  console.log(error)
  return (
    <div>
      <h1>Oops!</h1>
      <p>Something went wrong!</p>
      <p>
        <i>
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  )  
}
const Layout= ()=> {
  
  return(
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <Feed />},
      {path: "/videos/:id", element: <VideoPlayer />}
    ]
  }
])




const App = () => {
  
  return (

    <AppContext>
      <div className="flex h-full">
        <RouterProvider router={router} />
      </div>
    </AppContext>

  )
}

export default App
