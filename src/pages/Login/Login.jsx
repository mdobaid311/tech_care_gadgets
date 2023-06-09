import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { decodeJWTRespnse } from "../../utils/jwt";

const Login = () => {
  const responseGoogle = (response) => {
    const decoded = decodeJWTRespnse(response.credential);
    console.log(decoded);
  };
  return (
    <div className="login_page">
      <Navbar />
      <div className="login_form_container">
        <h1>Create New Customer Account</h1>

        <div className="login_form">
          <h3>Login Information</h3>
          <div className="login_form_field">
            <label htmlFor="email">
              Email
              <span className="required">*</span>
            </label>
            <input type="email" placeholder="Email" id="email" name="email" />
          </div>
          <div className="login_form_field">
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
          <div className="login_form_buttons">
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
            <button>Back</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
