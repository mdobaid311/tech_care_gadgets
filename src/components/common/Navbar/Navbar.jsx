import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../../assets/tech-care-gadgets-logo.png";
import { Link } from "react-router-dom";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useStateContext } from "../../../context/stateContext";
import Menu from "../Menu/Menu";

const Navbar = () => {
  const { user, totalPrice: cartTotal } = useStateContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <img src={logo} alt="" className="navbar__logo" />
        </div>
        <div className="navbar__center">
          <ul className="navbar__menu">
            <li className="navbar__menu-item">
              <Link to="/ ">Home</Link>
            </li>
            <li className="navbar__menu-item shop">
              <Link to="/shop">Shop</Link>
              <div className="menu__box">
                <Menu />
              </div>
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
      <nav className="mobile__navbar">
        <div className="logo">
          <img src={logo} alt="Logo Image" />
        </div>
        <div
          className={`hamburger ${isOpen ? "toggle" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
