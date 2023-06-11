import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import { client } from "../../sanity/client";
import { useStateContext } from "../../context/stateContext";
import Topbar from "../common/Topbar/Topbar";

const AppLayout = () => {
  const router = useNavigate();
  const { user, setUserDetails, setTotalPrice, totalPrice } = useStateContext();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserDetails(user);
    } else {
      console.log("no user found");
    }
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
      {/* <Navbar /> */}
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
