import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import { useDispatch } from "react-redux";
import { client } from "../../sanity/client";

const AppLayout = () => {
  const dispatch = useDispatch();
  const router = useNavigate();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "user" && email=='mdobaid311@gmail.com']{_id,name, email,address,phoneNumber ,orders,cart[]->{..., "imageUrl": image.asset->url},"imageUrl": image[].asset->url}`
      )
      .then((user) => {
        if (user?.length > 0) {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: user[0],
          });

          if (user[0]?.cart.length > 0) {
            user[0]?.cart.forEach((item) => {
              dispatch({
                type: "ADD_TO_CART",
                payload: item,
              });
            });
          }
        } else {
          // router("/login");
        }
      })
      .catch(console.error);
  }, [dispatch]);

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
