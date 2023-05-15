import { createContext, useEffect, useState } from "react";
// import PRODUCTS_DATA from "../data/shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";

const defaultContext = {
  categoriesMap: {},
};

export const CategoriesContext = createContext(defaultContext);

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};


