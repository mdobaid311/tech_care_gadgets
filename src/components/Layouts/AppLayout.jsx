import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import { useStateContext } from "../../context/stateContext";
import Topbar from "../common/Topbar/Topbar";

const AppLayout = () => {
  const router = useNavigate();
  const { user, setUserDetails, setTotalPrice, totalPrice } = useStateContext();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUserDetails(userData);
    if (userData) {
      const res = await fetch(`http://localhost:5000/api/v1/users/${userData._id}`);
      const data = await res.json();
      console.log(data)
      setUserDetails(data.user);
    } else {
      console.log("no user found");
    }
  }

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
