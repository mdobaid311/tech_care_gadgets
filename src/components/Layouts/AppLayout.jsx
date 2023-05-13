import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
