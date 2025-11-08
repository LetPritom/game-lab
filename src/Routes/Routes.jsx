import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";
import GameDetails from "../pages/GameDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from '../pages/Error'


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
      },
      {
        path:'/login' ,
        element:<Login></Login>
      },
      {
        path:'/register' ,
        element:<Register></Register>
      },
    ]
  }
])
