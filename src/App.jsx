import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { client } from "./sanity/client";
import { useSelector, useDispatch } from "react-redux";

import AuthLayout from "./components/Layouts/AuthLayout";
import AppLayout from "./components/Layouts/AppLayout";

import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import DetailView from "./pages/DetailView/DetailView";
import { gapi } from "gapi-script";

function App() {
  console.log(import.meta.env.VITE_API_KEY) // 123
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<AppLayout />}>
            <Route path="" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<DetailView />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="cart" element={<Checkout />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
