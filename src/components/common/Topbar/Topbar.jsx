import React from "react";
import logo from "../../../assets/tech-care-gadgets-logo.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import styles from "./Topbar.module.scss";
import { BsCart } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Topbar = () => {
  return (
    <>
      <div className={styles.topbar__desktop}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search Tech Care Gadgets..." />
          <button>
            <BiSearch className={styles.icon} />
          </button>
        </div>
        <div className={styles.cart}>
          <BsCart className={styles.icon} />
          <span>1</span>
        </div>
        <div className={styles.signin}>
          <button>
            <FcGoogle className={styles.icon} />
            SIGN IN
          </button>
        </div>
      </div>
      <div className={styles.topbar__mobile}>
        <div className={styles.row_1}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.left}>
            <div className={styles.cart}>
              <BsCart className={styles.icon} />
              <span>1</span>
            </div>
            <div className={styles.signin}>
              <button>
                <FcGoogle className={styles.icon} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Search Tech Care Gadgets..." />
          <button>
            <BiSearch className={styles.icon} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Topbar;
