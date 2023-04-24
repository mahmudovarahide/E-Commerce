import React from "react";
import SignUp from "./sign-up/index";
import SignIn from "./sign-in/index";

const Authentication = () => {


  return (
    <div className="container">
      <div className="row mt-5">
        <SignIn />
        <SignUp />
      </div>
      {/* <button onClick={signInWithGoogleRedirect}>Redirect</button> */}
    </div>
  );
};

export default Authentication;
