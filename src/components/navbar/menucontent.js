import React from "react";
import "./navbar.css";

const MenuContent = () => {
  return (
    <div>
      <div className="gpt3__navbar-menu_container scale-up-center">
        <div className="gpt3__navbar-menu_container-links">
          <div className="hambmenu">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#about">About</a>
            </p>
            <p>
              <a href="#possibility">What we offer?</a>
            </p>
            <p>
              <a href="#features">Portfolio</a>
            </p>

            <p>
              <a href="#blog">Blog</a>
            </p>
            <div className="gpt3__navbar-menu_container-links-sign">
              <div>
                <p>Sign In</p>
              </div>
              <div>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
