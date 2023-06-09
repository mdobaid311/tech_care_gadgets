import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../../assets/tech-care-gadgets-logo.png";
import { Link } from "react-router-dom";
import {  BiShoppingBag } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
 

const Navbar = () => {
  const [activeDropdowns, setActiveDropdowns] = useState([]);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleDropdown = (index) => {
    const newActiveDropdowns = [...activeDropdowns];
    newActiveDropdowns[index] = !newActiveDropdowns[index];
    setActiveDropdowns(newActiveDropdowns);
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header>
      <nav className="navbar container">
        <Link to="#">
          <img src={logo} alt="Tech Care Gadgets" className="navbar__logo" />
        </Link>
        <div className={`navbar__menu ${isMenuActive ? "right-open" : ""}`}>
          <ul className="navbar__list">
            <li className="navbar__list-drop">
              <Link to="/" onClick={() => toggleDropdown(0)}>
                Home
                {/* <AiFillCaretDown /> */}
              </Link>
              {/* <ul
                className={`navbar__list-drop-menu features ${
                  activeDropdowns[0] ? "open" : ""
                }`}
              >
                <li>
                  <Link to="#">
                    <span>Todo List</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">Calendar</Link>
                </li>
                <li>
                  <Link to="#">Reminders</Link>
                </li>
                <li>
                  <Link to="#">Planning</Link>
                </li>
              </ul> */}
            </li>
            <li className="navbar__list-drop">
              <Link to="#" onClick={() => toggleDropdown(1)}>
                Shop
                <AiFillCaretDown />
              </Link>
              <ul
                className={`navbar__list-drop-menu company ${
                  activeDropdowns[1] ? "open" : ""
                }`}
              >
                <li>
                  <Link to="/shop">All</Link>
                </li>
                <li>
                  <Link to="#">Categories</Link>
                </li>
                <li>
                  <Link to="#">Brands</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            {/* <li>
              <Link to="#">About</Link>
            </li> */}
          </ul>
          <div className="navbar__buttons">
            <Link to="/cart" className="navbar__shopping_cart">
              <BiShoppingBag className="icon" />
              <div>
                <span>Shopping Cart</span>
                <span>10 USD</span>
              </div>
            </Link>

            <Link className="navbar__buttons-login" to="/login">
              Login
            </Link>
          </div>
        </div>
        <div className="demo">
          <div
            id="menu-icon"
            className={`menu ${isMenuActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
