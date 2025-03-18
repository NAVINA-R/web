import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>Learn more about our mission and values.</p>
      </div>
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <p>Email: EnergiXInnovators@gmail.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </footer>
  );
}

export default Footer;
