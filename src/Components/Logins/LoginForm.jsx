import React from "react";
import "./LoginForm.css";
const LoginForm = () => {
  return (
    <div className="login-form-container">
      <form action="" className="login-form">
        <input
          type="email"
          name=""
          id=""
          placeholder="Email Address"
          required
        />
        <input type="password" name="" id="" placeholder="Password" required />
        <div className="form-checkbox">
          <div className="check">
            <input type="checkbox" name="" id="check-box" />
          </div>
          <span>Remember Me</span>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
