import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import ErrorPage from './component/ErrorPage.jsx';

import Home from './component/Home.jsx';
import Register from './component/Register.jsx';
import Login from './component/Login.jsx';
import AddTourist from './component/AddTourist.jsx';
import TouristsSpot from './component/TouristsSpot.jsx';
import Listed from './component/Listed.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PraivateRoute from './component/PraivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },

      {
        path:"/TouristsSpot",
        element:<TouristsSpot></TouristsSpot>
      }
     ,
     {
      path:"/register",
      element:<Register></Register>
     }
     ,
     {
      path:"/addTourist",
      element:<PraivateRoute><AddTourist></AddTourist></PraivateRoute>
     }
     ,
     {
      path:"/login",
      element:<Login></Login>
     }
     ,
     {
      path:"/Mylist",
      element:<PraivateRoute><Listed></Listed></PraivateRoute>,
      loader:() => fetch('https://travel-server-sigma.vercel.app/travel')
     }
     ,
     
    
    ]
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
