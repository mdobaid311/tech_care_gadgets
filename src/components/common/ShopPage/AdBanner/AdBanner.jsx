import React from "react";
import "./AdBanner.scss";

const AdBanner = () => {
  return (
    <div className="adbanner">
      <div className="adbanner__content">
        <h1>Shopping withour limits.</h1>
        <span>
          You can choose the best option for you, and it does not matter weather
          you are in prague or san francisco. We will deliver your purchase
          anywhere!
        </span>
        <button>SHOP NOW</button>
      </div>
      <div className="adbanner__image"></div>
    </div>
  );
};

export default AdBanner;
