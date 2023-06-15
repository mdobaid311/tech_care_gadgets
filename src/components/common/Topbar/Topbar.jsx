import React, { useState } from "react";
import logo from "../../../assets/tech-care-gadgets-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import styles from "./Topbar.module.scss";
import { BsCart } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useStateContext } from "../../../context/stateContext";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Topbar = () => {
  const { user, setSearchText, searchText, qty } = useStateContext();
  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(user?.given_name);

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const navigate = useNavigate();
  const location = useLocation();

  const options = [
    {
      label: "Cart",
      handler: () => navigate("/cart"),
    },
    {
      label: "Sign Out",
      handler: handleLogout,
    },
  ];

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if (location.pathname !== "/shop") {
      navigate("/shop");
    }
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className={styles.topbar__desktop}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <Link to="/shop" className={styles.shopBtn}>
          SHOP
        </Link>
        <div className={styles.searchBar}>
          <input
            type="text"
            value={searchText}
            placeholder="Search Tech Care Gadgets..."
            onInput={searchHandler}
          />
          <button>
            <BiSearch className={styles.icon} />
          </button>
        </div>
        <Link to="/cart" className={styles.cart}>
          <BsCart className={styles.icon} />

          <span>{qty}</span>
        </Link>
        <div className={styles.signin}>
          {user ? (
            <div className={styles.dropdown}>
              <div
                className={`${styles.select} ${
                  isClicked ? styles["select-clicked"] : ""
                }`}
                onClick={handleClick}
              >
                <span className={styles.selected}>{user?.given_name}</span>
                <div
                  className={`${styles.caret} ${
                    isClicked ? styles["caret-rotate"] : ""
                  }`}
                ></div>
              </div>
              <ul
                className={`${styles.menu} ${
                  isClicked ? styles["menu-open"] : ""
                }`}
              >
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={`${
                      option === selectedOption ? styles.active : ""
                    }`}
                    onClick={option.handler}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button>
                <FcGoogle className={styles.icon} />
                SIGN IN
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.topbar__mobile}>
        <div className={styles.row_1}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={styles.left}>
            <Link to="/shop" className={styles.shopBtn}>
              SHOP
            </Link>
            <Link to="/cart" className={styles.cart}>
              <BsCart className={styles.icon} />
              <span>{qty}</span>
            </Link>
            <div className={styles.signin}>
              {user ? (
                <div className={styles.dropdown}>
                  <div
                    className={`${styles.select} ${
                      isClicked ? styles["select-clicked"] : ""
                    }`}
                    onClick={handleClick}
                  >
                    <span className={styles.selected}>{user?.given_name}</span>
                    <div
                      className={`${styles.caret} ${
                        isClicked ? styles["caret-rotate"] : ""
                      }`}
                    ></div>
                  </div>
                  <ul
                    className={`${styles.menu} ${
                      isClicked ? styles["menu-open"] : ""
                    }`}
                  >
                    {options.map((option, index) => (
                      <li
                        key={index}
                        className={`${
                          option === selectedOption ? styles.active : ""
                        }`}
                        onClick={option.handler}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link to="/login">
                  <button>
                    <FcGoogle className={styles.icon} />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            value={searchText}
            placeholder="Search Tech Care Gadgets..."
            onInput={searchHandler}
          />
          <button>
            <BiSearch className={styles.icon} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Topbar;
