import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/feature.jsx";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="about">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Hypotheses Validation Plan"
          text="Start clarifying a correct path in a variety of options, via hypotheses;"
        />
      </div>
      <div className="gpt3__whatgpt3-header">
        <h1 className="gradient__text">
          Know what to do next with your current project
        </h1>
        <p>Order an active short term research before investing efforts</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Online Presence"
          text="We will arrange a short MVP or landing page, make a social network presence and aggressively sell your idea to potential clients;"
        />
        <Feature
          title="Market Segments"
          text="We will test several market niches (up to 3) or industry verticals (3-5) to find your winning territory."
        />
        <Feature
          title="Lead Generation"
          text="Let's test up to 3 lead generation channels to identify how to sell your product. "
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
