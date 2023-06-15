import { GoogleLogin } from "@react-oauth/google";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import BrandLogoRibbon from "../../components/common/HomePage/BrandLogoRibbon/BrandLogoRibbon";
import Hero from "../../components/common/HomePage/Hero/Hero";
import Services from "../../components/common/HomePage/Services/Services";
import { useStateContext } from "../../context/stateContext";
import { decodeJWTRespnse } from "../../utils/jwt";
import styles from "./Home.module.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { setUserDetails, user } = useStateContext();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
        const prods = await axios.get(`${import.meta.env.VITE_API_KEY}/api/v1/products`)
      setProducts(prods.data.products)

  };

  const responseGoogle = async (response) => {
    const decoded = decodeJWTRespnse(response.credential);
    const user = await axios.post(`${import.meta.env.VITE_API_KEY}/api/v1/users/login`, decoded)
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
      {/* <OffersGrid />
      <ProductsSection products={products} />
      <ProductsRibbon title="Featured Items:" />
      <ProductsRibbon title="Popular:" /> */}
      <Services/>
    </div>
  );
};

export default Home;
