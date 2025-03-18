import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function ForgotPassword() {
  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Reset Password</button>
      </form>
      <p>
        Remembered your password? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
