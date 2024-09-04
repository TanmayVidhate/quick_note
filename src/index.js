import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home.js'
import Show from './views/Show/Show.js'
import Add from './views/Add/Add.js'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([

  {
    path:"/",
    element:<Home/>
  },

  {
    path:"/add",
    element:<Add/>
  },

  {
    path:"/show",
    element:<Show/>
  },

  {
    path:"*",
    element:<h3>404 Page Not Found</h3>
  }

])

root.render(
  <>
  <RouterProvider router={router}/>
  <Toaster/>
  </>
);

