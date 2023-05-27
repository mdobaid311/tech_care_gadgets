import React from "react";
import "./Footer.scss";
import logo from "../../../assets/tech-care-gadgets-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer__features">
          <h3>Features</h3>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Children</li>
            <li>Boys</li>
            <li>Girls</li>
            <li>New Arrivals</li>
            <li>Shoes</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="footer__menu">
          <h3>Menu</h3>
          <ul>
            <li>About us </li>
            <li>Contact us</li>
            <li>My Account</li>
            <li>My Wishlist</li>
            <li>My Cart</li>
          </ul>
        </div>
        <div className="footer__contactus">
          <h3>Contact us</h3>

          <ul>
            <li>
              <span>Address</span>
              <p>1234 Main Street, Anytown, CA 12345 USA</p>
            </li>
            <li>
              <span>Phone</span>
              <p>(800) 123-4567</p>
            </li>
            <li>
              <span>Email</span>
              <p>
                <a href="mailto:mdobaid311@gmail.com">mdobaid311@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="footer__followus">
          <h3>Follow us</h3>

          <ul>
            <li>
              <div>
                <FaFacebook className="icon" />
                Facebook
              </div>
            </li>
            <li>
              <div>
                <FaTwitter className="icon" />
                Twitter
              </div>
            </li>
            <li>
              <div>
                <FaInstagram className="icon" /> Instagram
              </div>
            </li>
          </ul>
        </div>
        <div className="footer__joinus">
          <h3>Join our </h3>
          <span>Subscribe to our newsletters</span>
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
