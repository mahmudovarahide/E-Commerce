import React, { useContext, useState } from "react";
import Logo from "./image/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { CardContext } from "../../context/card.context";
import Button from "../../components/button/button.componnet";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { isCardOpen, setIsCardOpen } = useContext(CardContext);

  const setSignOut = () => {
    signOutUser();
    navigate("/")
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
                <NavLink to="/products" className="nav-item">
                  Products
                </NavLink>
                <NavLink to="/profile" className="nav-item">
                  {currentUser.email}
                </NavLink>
                <CardIcon />
                {isCardOpen && <CardDropdown />}
                <Button buttonType="signOut" onClick={setSignOut}>
                  Sign Out
                </Button>
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
