import React from "react";
// import { MdLocationPin } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact__container">
        <div className="contact__container__left">
          <div className="contact_info">
            <div className="icon">
              <BsFillTelephoneFill />
            </div>
            <h4>
              Address
              <span>1234 Main St. Anywhere, ST 12345</span>
            </h4>
          </div>
          <div className="contact_info">
            <div className="icon">
              <BsFillTelephoneFill />
            </div>
            <h4>
              Phone
              <span>9515281551</span>
            </h4>
          </div>
          <div className="contact_info">
            <div className="icon">
              <AiOutlineMail />
            </div>
            <h4>
              Email
              <span>mdobaid311@gmail.com</span>
            </h4>
          </div>
        </div>
        <div className="contact__container__right">
          <form>
            <h1>Send Message</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Type your message" />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div className="location__container">
        <h1>FIND US ON MAP</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.8730873887343!2d-79.477479!3d44.044677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad1205a45e7f3%3A0x9bb02aca1778d240!2sTech%20Care%20Gadgets!5e0!3m2!1sen!2sin!4v1685179314614!5m2!1sen!2sin"
          loading="lazy"
          className="map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
