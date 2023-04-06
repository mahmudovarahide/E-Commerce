import React from "react";
import {
  googleSignWithPopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Login = () => {
  const logGoogleUser = async () => {
    const {user} = await googleSignWithPopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Google</button>
    </div>
  );
};

export default Login;
