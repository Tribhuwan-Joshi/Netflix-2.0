import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./SignUpScreen.css";
export default function SignUpScreen({ email, handleEmail }) {
  const passwordRef = useRef(null);
  const [miss,setMiss] = useState(false);
  const register = (e) => {
    e.preventDefault();
    if(!passwordRef)
{
  setMiss(true);
  return;
}
    createUserWithEmailAndPassword(auth, email, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => console.log(err.message));
  };

  const signIn = (e) => {
    e.preventDefault();
        if (!passwordRef) {
          setMiss(true);
          return;
        }
    signInWithEmailAndPassword(auth, email, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input onChange={handleEmail} value={email} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="password" type="password" />
        <div style={{color:"red" , margin:"-8px" , fontWeight:"500" , visibility: `${miss?"visible":"hidden"}` }} >Provide valid details</div>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen_gray">New to Netflix?</span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up now.
          </span>{" "}
        </h4>
      </form>
    </div>
  );
}
