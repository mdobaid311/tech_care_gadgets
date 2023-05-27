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
          <div className="contact">
            <div className="icon">
              <BsFillTelephoneFill />
            </div>
            1234 Main St. Anywhere, ST 12345
          </div>
          <div className="contact">
            <div className="icon">
              <BsFillTelephoneFill />
            </div>
            9515281551
          </div>
          <div className="contact">
            <div className="icon">
              <AiOutlineMail />
            </div>
            mdobaid311@gmail.com
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
    </div>
  );
};

export default Contact;
