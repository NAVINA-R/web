import React from "react";
import "./Header.css";
import sjitlogo from "./sjitlogo.png";  // Ensure the file exists
import entwy from "./entwy.jpeg";  // Ensure the file exists
import zuntra from "./zuntra.jpeg";
function Header() {
  return (
    <header className="header">
      <div className="logo">
      <img src={entwy} alt="Left Image" className="side-image1" />
            <img src={sjitlogo} alt="Logo" className="logo" />
            <img src={zuntra} alt="Right Image" className="side-image2" />
      </div>
      <h1>CAMPUS ENERGY MANAGEMENT SYSTEM</h1>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
