import React from "react";
import "./Hero.scss";
import image1 from "../../../../assets/shirt-1.jpg";
import image2 from "../../../../assets/shirt-2.jpg";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="content__description">
          <h1>
            SUMMER SALE GET <span>30% OFF</span> ON ALL DRESS.
          </h1>
          <button>SHOP NOW</button>
        </div>
        <div className="content__images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
        </div>
      </div>

      <div className="hero__controls">
        <div className="controls__dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>

        <div className="control__buttons">
          <button className="prev">
            <FaAngleLeft />
          </button>
          <button className="next">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
