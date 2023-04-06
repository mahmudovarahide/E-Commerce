import React from "react";
import Logo from "./image/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="img-box">
            <img className="w-100" src={Logo} alt="" />
          </div>
          <nav className="nav-items d-flex gap-3 align-items-center">
            <NavLink to="/" className="nav-item">Home</NavLink>
            <NavLink to="/contact" className="nav-item">Contact</NavLink>
            <NavLink to="/login" className="nav-item">Login</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
