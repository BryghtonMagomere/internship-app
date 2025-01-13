import React, { useState } from 'react';
import '../styles/SupervisorDashboard.css';
import {
  FaBars, FaBell, FaTable, FaLock, FaSignOutAlt, FaUserTie, FaTasks,
  FaClipboardCheck, FaListAlt, FaPrescription, FaChartLine, FaUser, FaFolderOpen, FaCalendarAlt, FaLifeRing
} from 'react-icons/fa';

const SupervisorDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const supervisorName = "John Doe";
  const approvalProgress = 75;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="supervisor-dashboard-container">
      {/* Sidebar */}
      <div className={`supervisor-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="supervisor-sidebar-links">
          <li><a href="#document-management"><FaFolderOpen className="supervisor-sidebar-icon" />Document Management</a></li>
          <li><a href="#feedback-evaluation"><FaPrescription className="supervisor-sidebar-icon" />Feedback Evaluation</a></li>
          <li><a href="#notifications"><FaBell className="supervisor-sidebar-icon" />Notifications</a></li>
          <li><a href="#calendar"><FaCalendarAlt className="supervisor-sidebar-icon" />Calendar</a></li>
          <li><a href="#support-help"><FaLifeRing className="supervisor-sidebar-icon" />Support & Help</a></li>
          <li><a href="#report"><FaTable className="supervisor-sidebar-icon" />Report</a></li>
          <li><a href="#reset-password"><FaLock className="supervisor-sidebar-icon" />Reset Password</a></li>
          <li><a href="#logout"><FaSignOutAlt className="supervisor-sidebar-icon" />Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`supervisor-main-content ${isSidebarOpen ? '' : 'full-width'}`}>
        <div className={`supervisor-top-navbar ${isSidebarOpen ? '' : 'full-width-navbar'}`}>
          <button className="supervisor-burger-btn" onClick={toggleSidebar}><FaBars /></button>
          <div className="supervisor-profile-container">
            <div className="supervisor-profile-image">
              <img src="path-to-supervisor-image.jpg" alt="Supervisor Profile" />
            </div>
          </div>
          <h2>Welcome, {supervisorName}</h2>
          <button className="supervisor-logout-btn">Logout</button>
        </div>
        
        <div className="supervisor-section-container">
          <div className="supervisor-card" onClick={() => alert('Profile Management Clicked!')}>
            <FaUser className="supervisor-card-icon" />
            <div className="supervisor-card-content">
              <h3>Profile Management</h3>
              <p>Manage your user information.</p>
            </div>
          </div>
          
          <div className="supervisor-card" onClick={() => alert('Trainee Management Clicked!')}>
            <FaUserTie className="supervisor-card-icon" />
            <div className="supervisor-card-content">
              <h3>Trainee Management</h3>
              <p>View all assigned trainees, including their profile, progress, and performance metrics.</p>
            </div>
          </div>
          <div className="supervisor-card" onClick={() => alert('Task Management Clicked!')}>
            <FaTasks className="supervisor-card-icon" />
            <div className="supervisor-card-content">
              <h3>Task Management</h3>
              <p>Create, assign, and track tasks for trainees with due dates.</p>
            </div>
          </div>

          <div className="supervisor-card" onClick={() => alert('Dashboard Overview Clicked!')}>
            <FaChartLine className="supervisor-card-icon" />
            <div className="supervisor-card-content">
              <h3>Dashboard Overview</h3>
              <p>Summary of key metrics including performance analytics and total trainees.</p>
            </div>
          </div>

          <div className="supervisor-card" onClick={() => alert('Trainee Behavior Approval Clicked!')}>
            <FaClipboardCheck className="supervisor-card-icon" />
            <div className="supervisor-card-content">
              <h3>Trainee Behavior Approval</h3>
              <p>Review and approve trainee behavior submissions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
