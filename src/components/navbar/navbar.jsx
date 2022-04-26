import React, { useState } from "react";
import "./navbar.css";
//import { FaPencilAlt } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import crossIcon from "../../assets/close_icon.png";
import hambIcon from "../../assets/hamburger_icon.png";
import MenuContent from "./menucontent.js";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#whatweoffer">What we offer?</a>
          </p>
          <p>
            <a href="#ouradvantage">Our Advantage</a>
          </p>
          <p>
            <a href="#blog">Blog</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <div>
          <p>Sign In</p>
        </div>
        <div>
          <button type="button">Sign Up</button>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        <a>
          <span>
            {toggleMenu ? (
              <img src={crossIcon} onClick={() => setToggleMenu(false)} />
            ) : (
              <img src={hambIcon} onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <div>
                <MenuContent />
              </div>
            )}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
