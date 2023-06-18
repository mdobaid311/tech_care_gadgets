import React from "react";
import "./Footer.scss";
import logo from "../../../assets/tech-care-gadgets-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__timings__mobile">
        <h3>Timings</h3>
        <ul>
          <li>
            <span> Monday to Saturday</span> <span>10:00 AM - 10:00 PM</span>
          </li>
          <li>
            <span>Sunday</span> <span>10:00 AM - 04:00 PM</span>
          </li>
        </ul>
      </div>
      <div className="footer__container">
        <div className="footer__contactus">
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer__followus">
          <h3>Follow us</h3>
          <div className="social">
            <a
              href="https://www.facebook.com/techcaregadgets"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/techcaregadgets/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/techcaregadgets"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer__timings">
          <h3>Timings</h3>
          <ul>
            {" "}
            <li>
              <span> Monday to Saturday</span> <span>10:00 AM - 10:00 PM</span>
            </li>
            <li>
              <span>Sunday</span> <span>10:00 AM - 04:00 PM</span>
            </li>
          </ul>
        </div>
        <div className="footer__logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
