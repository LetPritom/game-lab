import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import Root from './Layouts/Root.jsx';
import Home from './Components/Home.jsx';
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
    
  </StrictMode>,
)
