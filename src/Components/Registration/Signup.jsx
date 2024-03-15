// Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'; 
function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log({ email, password });
    };

    return (
        <form id="signupForm" className="signup-form" onSubmit={handleSignup}>
            <div className="signup-header">
                <h1>Signup</h1>
                <p>Enter your details to create an account</p>
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
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                
                <label>
                    Confirm Password
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
            </div>
            <div className="signup-footer">
            <span>Already have an account? <Link to="/login">Login</Link></span>                <button type="submit">Signup</button>
            </div>
        </form>
    );
}

export default Signup;
