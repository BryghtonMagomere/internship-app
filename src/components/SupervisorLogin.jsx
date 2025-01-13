import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './../styles/LoginForm.css';

const SupervisorLogin = () => {
    let navigate = useNavigate()
    return (
        <div className="login-form">
            <h2>Mentor Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <button onClick={()=>navigate('/supervisor-dashboard')} type="submit" className="login-button">Login</button>
            </form>
            <div className="register-link">
                <p>Don't have an account? <a href="/supervisor-register">Register here</a></p>
            </div>
        </div>
    );
};
export default SupervisorLogin;

