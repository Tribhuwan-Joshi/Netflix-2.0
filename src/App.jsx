import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=> {
  const unsubscribe =   onAuthStateChanged(auth , (user)=>{
      if(user){
        console.log(user);
        dispatch(login({
          uid : user.uid,
          email: user.email
        }));
      }
      else{
        dispatch(logout)
      }
    })
    return unsubscribe;
  },[]);
  return (
    <div className="app">
      <Router>
        
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route default path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
