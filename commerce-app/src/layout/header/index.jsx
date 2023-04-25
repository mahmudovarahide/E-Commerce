import React, { useContext } from "react";
import Logo from "./image/logo.svg";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import {SignOutUser } from "../../utils/firebase/firebase.utils";
import Button from "../../components/button/button.componnet";

const Header = () => {
  const { currentUser,setCurrentUser } = useContext(UserContext);

  const SignOutHandle = async() => {
    await SignOutUser();
    setCurrentUser(null);
  };
  
  return (
    <header className="p-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="img-box">
            <img className="w-100" src={Logo} alt="" />
          </div>
          <nav className="nav-items d-flex gap-3 align-items-center">
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
            <NavLink to="/contact" className="nav-item">
              Contact
            </NavLink>
            {currentUser ? (
              <>
                <NavLink to="/profile" className="nav-item">
                  {currentUser.email}
                </NavLink>
                <Button buttonType="sign-out" onClick={SignOutHandle}>Sign Out</Button>
              </>
            ) : (
              <NavLink to="/auth" className="nav-item">
                Login
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
