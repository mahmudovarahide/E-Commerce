import React from "react";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  signUp: "signup-button",
  signIn: "signin-button",
  signInPopup: "sign-in-popup",
  signOut: "sign-out",
  cardAddButton:"invert-card-button",
  paymentButton:"payment",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
