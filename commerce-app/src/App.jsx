import React, { useEffect } from "react";
import "./style/style.css";
import Layout from "./layout";
import Router from "./router/index";
import { useDispatch } from "react-redux";
import {
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { setCategoriesMap } from "./store/categories/categories.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);


  return (
    <>
      <Layout />
      <Router />
    </>
  );
};

export default App;
