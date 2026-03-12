import React from "react";
import "./FormsStyle.css";
const RegisterForm = () => {
  return (
    <div className="register-form-container">
      <form action="" className="register-form">
        <input type="text" name="" id="" placeholder="User Name" required />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email Address"
          required
        />
        <input type="password" name="" id="" placeholder="Password" required />
        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
