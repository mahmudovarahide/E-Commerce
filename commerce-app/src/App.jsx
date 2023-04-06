import React from "react";
import "./style/style.css";
import Layout from "./layout";
import Router from "./router/index";

const App = () => {
  return (
    <>
      <Layout></Layout>
      <Router />
    </>
  );
};

export default App;
