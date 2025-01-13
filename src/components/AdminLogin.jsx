import React from 'react';
import './../styles/LoginForm.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    let navigate = useNavigate()
    return (
        <div className="login-form">
            <h2>Admin Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="staff-id">Staff ID</label>
                    <input 
                        type="text" 
                        id="staff-id" 
                        placeholder="Enter your Staff ID" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter your password" 
                        required 
                    />
                </div>
                <button onClick={()=>navigate('/admin-dashboard')} type="submit" className="login-button">Login</button>
            </form>
            <div className="register-link">
                <p>Don't have an account? <a href="/admin-register">Register here</a></p>
            </div>
        </div>
    );
};

export default AdminLogin;
