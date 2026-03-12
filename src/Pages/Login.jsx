import React, { useState } from "react";
import LoginForm from "../Components/Logins/LoginForm";
import RegisterForm from "../Components/Logins/RegisterForm";
import "./Login.css";
const Login = () => {
  const [activetab, setActivetab] = useState("login");
  return (
    <div className="login-container">
      <div className="logins-tabs">
        <button
          className={activetab === "login" ? "active" : ""}
          onClick={() => setActivetab("login")}
        >
          Login
        </button>
        <button
          className={activetab === "register" ? "active" : ""}
          onClick={() => setActivetab("register")}
        >
          Register
        </button>
      </div>
      {activetab === "login" && <LoginForm />}
      {activetab === "register" && <RegisterForm />}
    </div>
  );
};

export default Login;
