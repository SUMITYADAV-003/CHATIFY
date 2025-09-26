import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../src/home/Home.jsx";
import Login from './pages/authentication/Login.jsx';
import Signup from './pages/authentication/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  }
]);

createRoot(document.getElementById('root')).render(

  <>
  <RouterProvider router={router}/>
    <App />
  
  </>





    

)
