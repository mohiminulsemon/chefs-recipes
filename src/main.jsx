import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Layout/Home";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

const router = createBrowserRouter([
  {
  path: '/',
  element: <Home></Home>,
  children: [
    {
      path: '/blog',
      element: <Blog></Blog>
    },
    {
      path: '/login',
      element: <Login></Logi>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    }
    ]
  }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
