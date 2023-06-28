import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = () => {
    // Implement your login logic here
    // This is just a placeholder
    console.log("Logging in...");
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    // This is just a placeholder
    console.log("Forgot password clicked");
  };

  const handleRegister = () => {
    // Implement your register logic here
    // This is just a placeholder
    console.log("Register button clicked");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Valentinasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Valentinasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              value={password}
              onChange={handlePasswordChange}
            />
            <label className="rememberMeLabel">
              <input
                type="checkbox"
                className="rememberMeCheckbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Remember Me
            </label>
            <button className="loginButton" onClick={handleLogin}>
              Log In
            </button>
            <span className="loginForgot" onClick={handleForgotPassword}>
              Forgot Password?
            </span>
            <button className="loginRegisterButton" onClick={handleRegister}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
