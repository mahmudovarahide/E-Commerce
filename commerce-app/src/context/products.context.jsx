import { createContext, useState } from "react";
import PRODUCTS from "../data/shop-data.json";

const defaultContext = {
  products: [],
};

export const ProductsContext = createContext(defaultContext);

export const ProductsProvider = ({ children }) => {
  const [products,setProducts]=useState(PRODUCTS);
  const value = { products };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
