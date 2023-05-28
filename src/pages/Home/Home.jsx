import React, { useEffect, useState } from "react";
import Hero from "../../components/common/HomePage/Hero/Hero";
import BrandLogoRibbon from "../../components/common/HomePage/BrandLogoRibbon/BrandLogoRibbon";
import OffersGrid from "../../components/common/HomePage/OffersGrid/OffersGrid";
import ProductsSection from "../../components/common/HomePage/ProductsSection/ProductsSection";
import ProductsRibbon from "../../components/common/HomePage/ProductsRibbon/ProductsRibbon";
import { client } from "../../sanity/client";
import { useSelector } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    await client
      .fetch(
        `*[_type == "product"]{_id,name, price, category,"imageUrl": image[].asset->url}`
      )
      .then((products) => {
        setProducts(products);
      })
      .catch(console.error);
  };

  return (
    <div>
      <Hero />
      <BrandLogoRibbon />
      <OffersGrid />
      <ProductsSection products={products} />
      <ProductsRibbon title="Featured Items:" />
      <ProductsRibbon title="Popular:" />
    </div>
  );
};

export default Home;
