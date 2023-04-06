import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/index";
import Contact from "../pages/contact/index";
import Login from "../pages/login/login";

const Router = () => {
  const mainRouters = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];
  const route = useRoutes(mainRouters);
  return <>{route}</>;
};

export default Router;
