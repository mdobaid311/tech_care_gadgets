import React from "react";
import "./Hero.scss";
import image1 from "../../../../assets/hero-2.jpg";
import image2 from "../../../../assets/hero-1.jpg";
import { Link } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="content__description">
          <h1>
            SUMMER SALE GET <span>30% OFF</span> ON ALL PRODUCTS.
          </h1>
          <Link to="/shop">SHOP NOW</Link>
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
