import React from "react";
import "./Footer.scss";
import logo from "../../../assets/tech-care-gadgets-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__contactus">
          {/* <h3>Contact us</h3>

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
          </ul> */}
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
        {/* <form className="footer__contact">
          <h2>Contact us</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button>Submit</button>
        </form> */}
        <div className="footer__logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
