// Router.js
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/index";
import Contact from "../pages/contact/index";
import Authentication from "../pages/login/authentication";
import Products from "../pages/products/prodcuts";
import Checkout from "../pages/checkout/checkout";
import SingleProduct from '../pages/products/product-single/product-single'

const Router = () => {
  const mainRoutes = [
    {
      path: "/",
      element: <Home />,
      exact: true,
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
    {
      path: "/products/:id",
      element: <SingleProduct />,
    },
  ];

  const route = useRoutes(mainRoutes);
  return <>{route}</>;
};

export default Router;
