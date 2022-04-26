import React from "react";
import "./ouradvantage.css";
import imagegirl from "../../assets/imagegirl.png";

const Advantage = () => {
  return (
    <div className="gpt3__advantage section__padding" id="ouradvantage">
      <div className="gpt3__advantage-image">
        <img src={imagegirl} alt="why us?"></img>
      </div>
      <div className="gpt3__advantage-content">
        <h4>Request a brief chat to discuss your case</h4>
        <h1 className="gradient__text">
          First steps to push your project to the right direction
        </h1>
        <p>
          The first set of questions you need to clarify about your project can
          be the parts of Lean Canvas (for startups), or Business Model Canvas
          (for established companies){" "}
        </p>
        <h4>
          Our collaboration will give you first vision of such Canvas based on
          early data from users and from the market
        </h4>
      </div>
    </div>
  );
};

export default Advantage;
