import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  googleSignWithPopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUp from "./components/sign-up/index";

const Login = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await googleSignWithPopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <SignUp />
      <button onClick={logGoogleUser}>Google</button>
      <button onClick={signInWithGoogleRedirect}>Redirect</button>
    </div>
  );
};

export default Login;
