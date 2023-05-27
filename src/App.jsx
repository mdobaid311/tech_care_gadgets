import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/Layouts/AuthLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AppLayout from "./components/Layouts/AppLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import DetailView from "./pages/DetailView";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout/Checkout";
import { client } from "./sanity/client";
import React, { useState, useEffect } from "react";
import Contact from "./pages/Contact/Contact";
import { useSelector, useDispatch } from "react-redux";

function App() {
 
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
