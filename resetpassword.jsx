import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function ResetPassword() {
  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form>
        <input type="password" placeholder="New Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Reset</button>
      </form>
      <p>
        Back to <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default ResetPassword;
