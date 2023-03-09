import React, { useState } from "react";
import "./LoginScreen.css";
import logo from "../assets/netflixlogo.png";
import loginPage from "../assets/loginPage.jpg";
import SignUpScreen from "./SignUpScreen";

export default function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");
  function handleEmail(e) {
    const emailValue = e.target.value.trim();
    setEmail(emailValue);
  }
  return (
    <div
      className="loginScreen"
      style={{
        background: `url(${loginPage}) no-repeat center `,
        backgroundSize: "cover",
      }}
    >
      <div className="loginScreen_background">
        <img src={logo} className="loginScreen_logo" alt="logo" />
        <button className="signIn_btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
      </div>
      <div className="loginScreen_gradient" />

      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen email={email} handleEmail={handleEmail} />
        ) : (
          <>
            <h1>Unlimited films , TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              memebership.
            </h3>

            <div className="loginScreen_input">
              <form>
                <input
                  type="email"
                  onChange={handleEmail}
                  placeholder="Email Address"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
