import React from "react";
import "./features.css";
import Feature from "../../components/feature/feature.jsx";

const featureData = [
  {
    title: "Solid plan",
    text: "Understanding on what to do next. You will get a step-by-step guidance of the necessary depth",
  },
  {
    title: "Hypotheses validation",
    text: "During this phase we define possible directions of your move, to check with potential clients. Key concepts of your business will be verified when you start investing funds, time and efforts",
  },
  {
    title: "Online presence",
    text: "Quick launch of your project forefront: landing page, social presence. We will aggressively sell your idea to potential clients and get the feedback. You will get valuable data for next important stage - MVP (Minimum Viable Product)",
  },
  {
    title: "Market Segments",
    text: "We will test several market niches (up to 3) or industry verticals (3-5) to find your winning territory. ",
  },
  {
    title: "Lead Generation",
    text: "Let's test up to 3 lead generation channels to identify how to sell your product.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Reach your future clients and evaluate marketing landscape. Now.
        </h1>
        <p>Send me inquiry to get a plan for your specific case</p>
      </div>
      <div className="gpt3__features-container">
        {featureData.map((item) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
