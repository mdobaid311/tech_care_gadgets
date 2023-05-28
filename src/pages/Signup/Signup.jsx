import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import "./Signup.scss";

const Signup = () => {
  return (
    <div className="signup_page">
      <Navbar />
      <div className="signup_form_container">
        <h1>Create New Customer Account</h1>

        <div className="signup_form">
          <h3>Personal Information</h3>
          <div className="signup_form_field">
            <label htmlFor="first_name">
              First Name
              <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              id="first_name"
              name="first_name"
            />
          </div>
          <div className="signup_form_field">
            <label htmlFor="last_name">
              Last Name
              <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              id="last_name"
              name="last_name"
            />
          </div>
          <div className="signup_form_field">
            <label htmlFor="email">
              Email
              <span className="required">*</span>
            </label>
            <input type="email" placeholder="Email" id="email" name="email" />
          </div>
          <div className="signup_form_field">
            <label htmlFor="password">
              Password
              <span className="required">*</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
          </div>
          <div className="signup_form_buttons">
            <button>Create An Account</button>
            <button>Back</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
