import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import "./Login.scss";
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from "react-router-dom";
 

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl } = response.profileObj;
    console.log(response.profileObj)
    // const doc = {
    //   _id: googleId,
    //   _type: 'user',
    //   userName: name,
    //   image: imageUrl,
    // };
    // client.createIfNotExists(doc).then(() => {
    //   navigate('/', { replace: true });
    // });

  };
  console.log(process.env.REACT_APP_GOOGLE_API_TOKEN + "hello")
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
              clientId="889079172962-dua368n7792ohdm85g25v15b4tmcuodn.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
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
