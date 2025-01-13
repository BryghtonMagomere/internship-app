import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StudentRegister from './components/StudentRegister';
import SupervisorRegister from './components/SupervisorRegister';
import AdminRegister from './components/AdminRegister';
import StudentLogin from './components/StudentLogin';
import SupervisorLogin from './components/SupervisorLogin';
import AdminLogin from './components/AdminLogin';
import StudentDashboard from './components/StudentDashboard';
import SupervisorDashboard from './components/SupervisorDashboard';
import AdminDashboard from './components/AdminDashboard';
function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    {/* Landing page route */}
                    <Route path="/" element={<LandingPage />} />

                    {/* Registration Routes */}
                    <Route path="/student-register" element={<StudentRegister />} />
                    <Route path="/supervisor-register" element={<SupervisorRegister />} />
                    <Route path="/admin-register" element={<AdminRegister />} />

                    {/* Login Routes */}
                    <Route path="/student-login" element={<StudentLogin />} />
                    <Route path="/supervisor-login" element={<SupervisorLogin />} />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    {/* Dashboards */}
                    <Route path="/student-dashboard" exact element={<StudentDashboard />} />
                    <Route path="/supervisor-dashboard" exact element={<SupervisorDashboard />} />
                    <Route path="/admin-dashboard" exact element={<AdminDashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
