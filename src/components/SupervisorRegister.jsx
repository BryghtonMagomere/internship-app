import React from 'react';
import './../styles/RegisterForm.css';

const SupervisorRegister = () => {
    return (
        <div className="register-form-container">
            <div className="register-form">
                <h2>Supervisor Registration</h2>
                <form>
                    {/* Supervisor Details Section */}
                    <div className="form-section">
                        <h3>Supervisor Details</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Enter your full name" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="Enter your phone number" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" required />
                            </div>
                        </div>
                    </div>

                    {/* Organization Details Section */}
                    <div className="form-section">
                        <h3>Organization Details</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="organization-name">Organization Name</label>
                                <input type="text" id="organization-name" placeholder="Enter organization name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="staff-id">Staff ID</label>
                                <input type="text" id="staff-id" placeholder="Enter your staff ID" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="org-password">Organization Password</label>
                                <input type="password" id="org-password" placeholder="Enter organization password" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="org-email">Organization Email</label>
                                <input type="email" id="org-email" placeholder="Enter organization email" required />
                            </div>
                        </div>
                    </div>

                    {/* Trainee Details Section */}
                    <div className="form-section">
                        <h3>Trainee Details</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="trainee-name">Trainee Name</label>
                                <input type="text" id="trainee-name" placeholder="Enter trainee's name" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="school-name">School Name</label>
                                <input type="text" id="school-name" placeholder="Enter school name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="admission-number">Admission Number</label>
                                <input type="text" id="admission-number" placeholder="Enter admission number" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="faculty">Faculty (Course Done)</label>
                                <input type="text" id="faculty" placeholder="Enter faculty or course done" required />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="register-button">Register</button>
                </form>
                <div className="login-link">
                    <p>Already have an account? <a href="/supervisor-login">Login here</a></p>
                </div>
            </div>
        </div>
    );
};

export default SupervisorRegister;
