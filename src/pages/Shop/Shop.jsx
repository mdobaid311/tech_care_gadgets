import React from "react";
import ProductsSection from "../../components/common/ShopPage/ProductsSection/ProductsSection";
// import AdBanner from "../components/common/ShopPage/AdBanner/AdBanner";
import "./Shop.scss";
import { BiSearch } from "react-icons/bi";

const Shop = () => {
  return (
    <div className="shop__container">
      {/* <AdBanner /> */}

      <ProductsSection />
    </div>
  );
};

export default Shop;
