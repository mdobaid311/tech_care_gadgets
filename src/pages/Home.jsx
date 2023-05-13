import React from "react";
import Hero from "../components/common/HomePage/Hero/Hero";
import BrandLogoRibbon from "../components/common/HomePage/BrandLogoRibbon/BrandLogoRibbon";
import OffersGrid from "../components/common/HomePage/OffersGrid/OffersGrid";
import ProductsSection from "../components/common/HomePage/ProductsSection/ProductsSection";
import ProductsRibbon from "../components/common/HomePage/ProductsRibbon/ProductsRibbon";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandLogoRibbon />
      <OffersGrid />
      <ProductsSection />
      <ProductsRibbon title="Featured Items:"/>
      <ProductsRibbon title="Popular:"/>
    </div>
  );
};

export default Home;
