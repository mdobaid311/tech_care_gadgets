import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import { useDispatch } from "react-redux";
import { client } from "../../sanity/client";

const AppLayout = () => {
  const router = useNavigate();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "user" && email=='mdobaid311@gmail.com']{_id,name, email,address,phoneNumber ,orders,cart[]->{..., "imageUrl": image.asset->url},"imageUrl": image[].asset->url}`
      )
      .then((user) => {})
      .catch(console.error);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
