import React from "react";
import "./BrandLogoRibbon.scss";

import image1 from "../../../../assets/brand-logos/Burberry.png";
import image2 from "../../../../assets/brand-logos/Chanel.png";
import image3 from "../../../../assets/brand-logos/Dior.png";
import image4 from "../../../../assets/brand-logos/Gucci.png";
import image5 from "../../../../assets/brand-logos/zara.png";
import image6 from "../../../../assets/brand-logos/armani.png";

const BrandLogoRibbon = () => {
  const logo = [image1, image2, image3, image4, image5, image6];

  return (
    <div
      className="
    brand-logo-ribbon
  "
    >
      <h1>Choose your brand</h1>
      <div className="brands">
        {logo.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt="brand-logo"
              className="brand-logo"
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrandLogoRibbon;
