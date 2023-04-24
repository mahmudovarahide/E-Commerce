import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/index";
import Contact from "../pages/contact/index";
import Authentication from "../pages/login/authentication";

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
      path: "/auth",
      element: <Authentication />,
    },
  ];
  const route = useRoutes(mainRouters);
  return <>{route}</>;
};

export default Router;
