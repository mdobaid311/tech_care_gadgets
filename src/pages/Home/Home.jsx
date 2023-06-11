import React, { useEffect, useState } from "react";
import Hero from "../../components/common/HomePage/Hero/Hero";
import BrandLogoRibbon from "../../components/common/HomePage/BrandLogoRibbon/BrandLogoRibbon";
import OffersGrid from "../../components/common/HomePage/OffersGrid/OffersGrid";
import ProductsSection from "../../components/common/HomePage/ProductsSection/ProductsSection";
import ProductsRibbon from "../../components/common/HomePage/ProductsRibbon/ProductsRibbon";
import { client } from "../../sanity/client";
import { GoogleLogin } from "@react-oauth/google";
import { decodeJWTRespnse } from "../../utils/jwt";
import styles from "./Home.module.scss";
import { useStateContext } from "../../context/stateContext";
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([]);
  const { setUserDetails, user } = useStateContext();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
        const prods = await axios.get('http://localhost:5000/api/v1/products')
      setProducts(prods.data.products)

  };

  const responseGoogle = async (response) => {
    const decoded = decodeJWTRespnse(response.credential);
    const user = await axios.post('http://localhost:5000/api/v1/users/login', decoded)
    setUserDetails(user.data.user);
  };

  return (
    <div className={styles.homepage__container}>
      <div className={styles.google_login}>
        {!user && (
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
            theme="filled_blue"
          />
        )}
      </div>
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
