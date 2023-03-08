import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const user = null;
  useEffect(()=> {
  const unsubscribe =   onAuthStateChanged(auth , (user)=>{
      if(user){
        console.log(user);
      }
      else{
        // logout
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
