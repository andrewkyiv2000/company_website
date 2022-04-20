import React from "react";
import "./brand.css";
import { brand1, brand2, brand3, brand4, brand5 } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand">
      <div>
        <img src={brand1} alt="brand1" />
      </div>
      <div>
        <img src={brand2} alt="brand2" />
      </div>
      <div>
        <img src={brand3} alt="brand3" />
      </div>
      <div>
        <img src={brand4} alt="brand4" />
      </div>
      <div>
        <img src={brand5} alt="brand5" />
      </div>
    </div>
  );
};

export default Brand;
