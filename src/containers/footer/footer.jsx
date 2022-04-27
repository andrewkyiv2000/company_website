import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const up = document.getElementById("home");

function clickHandler() {
  up.scrollIntoView({ block: "start", behavior: "smooth" });
}

const Footer = () => {
  return (
    <div className="gpt3__footer section-padding">
      <div className="gpt3__footer-heading" id="contact">
        <h1 className="gradient__text">
          Get a step-by-step guidance on what to do next by a digital agency
          owner
        </h1>
        <button type="button" className="gpt3__footer-btn">
          {" "}
          <p>Contact me</p>
        </button>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <div>
            <p>Company Name </p>
            <p>Batman, Maidan Nezalezhnosti Sq., Kyiv, Ukraine, 01001 </p>
          </div>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Website</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-buttonup">
          <button type="button" className="buttonup" onClick={clickHandler}>
            Up
          </button>
        </div>
      </div>
      <div className="gpt3__footer-links_bottom">
        {" "}
        <p>@ 2022. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
