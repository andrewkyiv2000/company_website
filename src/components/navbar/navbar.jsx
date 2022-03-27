import React from "react";
import "./navbar.css";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"></img>
        </div>
        Navbar
      </div>
    </div>
  );
};

export default Navbar;
