import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { decodeJWTRespnse } from "../../utils/jwt";
import { useStateContext } from "../../context/stateContext";
import axios from "axios";
import Topbar from "../../components/common/Topbar/Topbar";

const Login = () => {
  const { setUserDetails } = useStateContext();

  const responseGoogle = async (response) => {
    const decoded = decodeJWTRespnse(response.credential);
    const user = await axios.post(
      "http://localhost:5000/api/v1/users/login",
      decoded
    );
    setUserDetails(user.data.user);
  };

  return (
    <div className="login_page">
      <Topbar />
      <div className="login_form_container">
        <h1>Sign In</h1>

        {/* <div className="login_form">
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
          
            <button>Back</button>
          </div>
        </div> */}

        <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
