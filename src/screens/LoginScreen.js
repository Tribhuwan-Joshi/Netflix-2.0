import React from "react";
import "./LoginScreen.css";
import logo from "../assets/netflixlogo.png";
import loginPage from "../assets/loginPage.jpg";
export default function LoginScreen() {
  return (
    <div
      className="loginScreen"
      style={{ background: `url(${loginPage}) no-repeat center ` , backgroundSize:'cover' }}
    >
      <div className="loginScreen_background">
        <img src={logo} className="loginScreen_logo" alt="logo" />
        <button className="signIn_btn">Sign In</button>
      </div>
      <div className="loginScreen_gradient" />
    </div>
  );
}
