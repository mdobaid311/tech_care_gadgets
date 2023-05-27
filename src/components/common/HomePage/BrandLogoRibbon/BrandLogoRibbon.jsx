import React from "react";
import "./BrandLogoRibbon.scss";

import image1 from "../../../../assets/brands/Apple-Logo.png";
import image2 from "../../../../assets/brands/OnePlus-Logo.png";
import image3 from "../../../../assets/brands/Sony-logo.png";
import image4 from "../../../../assets/brands/samsung.png";
import image5 from "../../../../assets/brands/nokia.webp";
import image6 from "../../../../assets/brands/marshall.png";

const BrandLogoRibbon = () => {
  const logo = [image1, image2, image3, image4, image5, image6];

  return (
    <div
      className="
    brand-logo-ribbon
  "
    >
      <h1 >Choose your brand</h1>
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
