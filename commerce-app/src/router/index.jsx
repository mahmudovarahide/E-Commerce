import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/index";
import Contact from "../pages/contact/index";
import Authentication from "../pages/login/authentication";
import Products from "../pages/products/prodcuts";
import Checkout from "../pages/checkout/checkout";

const Router = () => {
  const mainRouters = [
    {
      path: "/",
      element: <Home />,
      exact:true,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/auth",
      element: <Authentication />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ];
  
  const route = useRoutes(mainRouters);
  return <>{route}</>;
};

export default Router;
