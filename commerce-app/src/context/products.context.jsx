import { createContext, useEffect, useState } from "react";
import PRODUCTS_DATA from "../data/shop-data.js";
import { addCollectionsDocuments } from "../utils/firebase/firebase.utils.jsx";

const defaultContext = {
  products: [],
};

export const ProductsContext = createContext(defaultContext);

export const ProductsProvider = ({ children }) => {
  useEffect(() => {
    addCollectionsDocuments("categories", PRODUCTS_DATA);
  }, []);
  const [products, setProducts] = useState([]);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
