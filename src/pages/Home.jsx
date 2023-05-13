import React from "react";
import Hero from "../components/common/HomePage/Hero/Hero";
import BrandLogoRibbon from "../components/common/HomePage/BrandLogoRibbon/BrandLogoRibbon";
import OffersGrid from "../components/common/HomePage/OffersGrid/OffersGrid";
import ProductsSection from "../components/common/HomePage/ProductsSection/ProductsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandLogoRibbon />
      <OffersGrid />
      <ProductsSection />
    </div>
  );
};

export default Home;
