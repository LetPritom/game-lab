import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";
import GameDetails from "../pages/GameDetails";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        index:true ,
        element:<Home></Home>
      },
      {
        path:'/detail/:id' ,
        element:<GameDetails></GameDetails>
      }
    ]
  }
])
