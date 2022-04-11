import React from "react";
import "./header.css";
import Ellipse31 from "../../assets/Ellipse31.png";
import ai1 from "../../assets/ai1.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1>Get Your Startup's Marketing Strategy Set Before You Go</h1>
        <p>
          If you start a new project or launch a product idea,{" "}
          <p>
            you might feel uncertain about what to do next, or how to handle
            your idea.{" "}
          </p>
          <p>
            it's always good to get a third party guidance with a clear plan on
            what to do next, right?
          </p>
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="your email address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={Ellipse31} alt="people" />
          <p>1600 people requested access</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img className="gpt3__header-image_image" src={ai1} alt="ai"></img>
      </div>
    </div>
  );
};

export default Header;
