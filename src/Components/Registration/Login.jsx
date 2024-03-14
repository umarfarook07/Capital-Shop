import React, { useState } from 'react';
import './styles.css'; // Make sure the path is correct

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle the login logic here
        console.log({ email, password, keepLoggedIn });
    };

    return (
        <form id="loginForm" className="login-form" onSubmit={handleLogin}>
            <div className="login-header">
                <h1>Login</h1>
                <p>Enter Login Details To Get Access</p>
            </div>
            <div className="data-input">
                <label>
                    Email Address
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                
                <label>
                    Password
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <div className="description">                       
                <label>
                    <input 
                        type="checkbox" 
                        checked={keepLoggedIn}
                        onChange={(e) => setKeepLoggedIn(e.target.checked)}
                    />
                    Keep Me Logged In
                </label>
                <a href="/User-registration-form/forgot-password.html">Forgot Password?</a>
            </div>
            <div className="login-footer">
                <span>Don't Have An Account ?<a href="/User-registration-form/signup.html"> SignUp </a>Here</span>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default Login;
