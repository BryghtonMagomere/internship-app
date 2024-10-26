import React from 'react';
import './../styles/LoginForm.css';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
    let navigate = useNavigate()
    return (
        <div className="login-form">
            <h2>Student Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="admission-number">Admission Number</label>
                    <input 
                        type="text" 
                        id="admission-number" 
                        placeholder="Enter your admission number" 
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
                <button onClick={()=>navigate('/student-dashboard')} type="submit" className="login-button">Login</button>
            </form>
            <div className="register-link">
                <p>Don't have an account? <a href="/student-register">Register here</a></p>
            </div>
        </div>
    );
};

export default StudentLogin;
