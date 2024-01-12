import React, { useState } from 'react';
import './LoginFoam.css';
import logo from './gps.jpg.png'; 

const LoginFoam = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="GPS Logo" />
      </div>
      <h1>Vehicle Tracking Login</h1>
      <div className="input-container">
        <label htmlFor="email"><b>Email:<b/></b></label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password"><b>Password:</b></label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={handleLogin}><b>Login</b></button>
        <span className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </span>
      </div>
    </div>
  );
};

export default LoginFoam;
