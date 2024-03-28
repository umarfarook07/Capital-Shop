import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            const data = await response.json();
        }
        catch(err){
            console.error('Error during the login process:', error);
        }
        
    };

    return (
        <form id="loginForm" className="form-container" onSubmit={handleLogin}>
            <div className="form-header">
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
            <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="form-footer">
                <span>Don't Have An Account ?<Link to="/signup"> SignUp </Link>Here</span>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default Login;
