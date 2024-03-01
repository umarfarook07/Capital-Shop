import React from "react";

function LoginForm() {
  return (
    <form id="loginForm" className="login-form">
        <div className="header">
            <h1>Login</h1>
            <p>Enter Login Details To Get Access</p>
        </div>
        <div className="data-input">
            <label>
                Email Address
                <input type="email" placeholder="Email Address" />
            </label>
            
            <label>
                Password
                <input type="password" placeholder="Enter Password" />
            </label>
        </div>
        <div className="description">                       
            <label>
                <input type="checkbox" name="" id="" />
                Keep Me Logged In
            </label>
            <a href="/User-registration-form/forgot-password.html">Forgot Password?</a>
        </div>
        <div className="footer">
            <span>Don't Have An Account ?<a href="/User-registration-form/signup.html"> SignUp </a>Here</span>
            <button type="submit">Login</button>
        </div>
    </form>
  );
}

export default LoginForm;
