import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        index:true ,
        element:<Home></Home>
      }
    ]
  }
])
