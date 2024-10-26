import React from 'react';
import './../styles/RegisterForm.css';

const StudentRegister = () => {
    return (
        <div className="register-form-container">
            <div className="register-form">
                <div className="header-container">
                    <h2>Student Registration</h2>
                </div>
                <form>
                    <div className="form-section">
                        <div className="subheader-container">
                            <h3>Personal Details</h3>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Enter your full name" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input type="number" id="age" placeholder="Enter your age" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="Enter your phone number" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" required />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="subheader-container">
                            <h3>School Details</h3>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="school">School Name</label>
                                <input type="text" id="school" placeholder="Enter your school name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="admission-date">Date of Admission</label>
                                <input type="date" id="admission-date" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="admission-number">Admission Number</label>
                                <input type="text" id="admission-number" placeholder="Enter your admission number" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="faculty">Faculty (Course Done)</label>
                                <input type="text" id="faculty" placeholder="Enter your faculty or course" required />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="subheader-container">
                            <h3>Placement Details</h3>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="organization">Organization Name</label>
                                <input type="text" id="organization" placeholder="Enter organization name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="department">Department Placed</label>
                                <input type="text" id="department" placeholder="Enter department" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="duration">Duration</label>
                                <input type="text" id="duration" placeholder="Enter duration" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="start-date">Start Date</label>
                                <input type="date" id="start-date" required />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="register-button">Register</button>
                </form>
                <div className="login-link">
                    <p>Already have an account? <a href="/student-login">Login here</a></p>
                </div>
            </div>
        </div>
    );
};

export default StudentRegister;
