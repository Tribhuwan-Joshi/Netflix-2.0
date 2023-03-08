import React from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
function App() {
  const user = null;
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
