import React from "react";
import "./Navbar.scss";
import logo from "../../../assets/tech-care-gadgets-logo.png";
import { Link } from "react-router-dom";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = true;

  const cartTotal = 0;

  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="" className="navbar__logo" />
      </div>
      <div className="navbar__center">
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <Link to="/ ">Home</Link>
          </li>
          <li className="navbar__menu-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="navbar__menu-item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search" />
          <BiSearch className="icon" color="#fff" />
          {/* <span>Search</span> */}
        </div>
      </div>
      <div className="navbar__right">
        <ul className="navbar__menu">
          {!user ? (
            <>
              <li className="navbar__menu-item">
                <Link to="/login">Sign in</Link>
              </li>
              <li className="navbar__menu-item">
                <Link to="/signup">Create an account</Link>
              </li>
            </>
          ) : (
            <li className="navbar__menu-item">
              <Link to="/">{user.name}</Link>
            </li>
          )}
        </ul>
        <Link to="#">
          <AiOutlineHeart className="icon" />
        </Link>
        <Link to="#">
          <BiShoppingBag className="icon" />
        </Link>
        <Link to="/cart" className="navbar__shopping_cart">
          <span>Shopping Cart</span>
          <span>{cartTotal} USD</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
