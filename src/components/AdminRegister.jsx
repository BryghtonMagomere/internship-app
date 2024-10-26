import React from 'react';
import './../styles/RegisterForm.css';

const AdminRegister = () => {
    return (
        <div className="register-form">
            <h2>Admin Registration</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="staff-id">Staff ID</label>
                    <input type="text" id="staff-id" placeholder="Enter your Staff ID" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
            <div className="login-link">
                <p>Already have an account? <a href="/admin-login">Login here</a></p>
            </div>
        </div>
    );
};

export default AdminRegister;
