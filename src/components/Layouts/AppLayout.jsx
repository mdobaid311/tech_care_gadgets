import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import { client } from "../../sanity/client";
import { useStateContext } from "../../context/stateContext";
 

const AppLayout = () => {
  const router = useNavigate();
  const { user, setUserDetails, setTotalPrice,totalPrice } = useStateContext();

  console.log(user);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "user" && email=='mdobaid311@gmail.com']{_id,name, email,address,phoneNumber ,orders,cart[]->{..., "imageUrl": image.asset->url},"imageUrl": image[].asset->url}`
      )
      .then((user) => {
        setUserDetails(user[0]);
        setTotalPrice(user[0].cart.reduce((acc, item) => acc + item.price, 0));
        console.log(totalPrice)
      })
      .catch(console.error);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
