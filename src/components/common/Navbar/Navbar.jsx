import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../../assets/tech-care-gadgets-logo.png";
import { Link } from "react-router-dom";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { AiFillCaretDown, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useStateContext } from "../../../context/stateContext";
import Menu from "../Menu/Menu";

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
        <a href="#">
          <img src={logo} alt="Tech Care Gadgets" className="navbar__logo" />
        </a>
        <div className={`navbar__menu ${isMenuActive ? "right-open" : ""}`}>
          <ul className="navbar__list">
            <li className="navbar__list-drop">
              <a href="#" onClick={() => toggleDropdown(0)}>
                Features
                <AiFillCaretDown />
              </a>
              <ul
                className={`navbar__list-drop-menu features ${
                  activeDropdowns[0] ? "open" : ""
                }`}
              >
                <li>
                  <a href="#">
                    <span>Todo List</span>
                  </a>
                </li>
                <li>
                  <a href="#">Calendar</a>
                </li>
                <li>
                  <a href="#">Reminders</a>
                </li>
                <li>
                  <a href="#">Planning</a>
                </li>
              </ul>
            </li>
            <li className="navbar__list-drop">
              <a href="#" onClick={() => toggleDropdown(1)}>
                Company
                <AiFillCaretDown />
              </a>
              <ul
                className={`navbar__list-drop-menu company ${
                  activeDropdowns[1] ? "open" : ""
                }`}
              >
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div className="navbar__buttons">
            <a className="navbar__buttons-login" href="#">
              Login
            </a>
            <button className="navbar__buttons-register" href="#">
              Register
            </button>
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
