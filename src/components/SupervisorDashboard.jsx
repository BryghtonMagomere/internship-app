import React, { useState } from 'react';
import '../styles/SupervisorDashboard.css';
import { FaBars, FaBell, FaTable, FaLock, FaSignOutAlt, FaUserTie, FaTasks, FaClipboardCheck, FaListAlt, FaPrescription } from 'react-icons/fa';

const SupervisorDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sample data for supervisor
  const supervisorName = "John Doe";
  const approvalProgress = 75; // Example approval progress

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="supervisor-dashboard-container">
      {/* Sidebar */}
      <div className={`supervisor-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="supervisor-sidebar-links">
          <li>
            <a href="#notifications">
              <FaBell className="supervisor-sidebar-icon" />
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a href="#reports">
              <FaTable className="supervisor-sidebar-icon" />
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a href="#reset-password">
              <FaLock className="supervisor-sidebar-icon" />
              <span>Reset Password</span>
            </a>
          </li>
          <li>
            <a href="#logout">
              <FaSignOutAlt className="supervisor-sidebar-icon" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`supervisor-main-content ${isSidebarOpen ? '' : 'full-width'}`}>
        <div className={`supervisor-top-navbar ${isSidebarOpen ? '' : 'full-width-navbar'}`}>
          <button className="supervisor-burger-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className="supervisor-profile-container">
            <div className="supervisor-profile-image">
              {/* Placeholder image */}
              <img src="path-to-supervisor-image.jpg" alt="Supervisor Profile" />
            </div>
          </div>
          <h2>Welcome, {supervisorName}</h2>
          <button className="supervisor-logout-btn">Logout</button>
        </div>
        <div className="supervisor-section-container">
          <div className="supervisor-card" onClick={() => alert('Supervisor Information Clicked!')}>
            <FaUserTie className="supervisor-card-icon" />
            <div className="supervisor-card-content">
              <h3>Supervisor Information</h3>
              <p>Details about the supervisor's role, contact, and responsibilities.</p>
            </div>
          </div>
          <div className="supervisor-card" onClick={() => alert('Trainee Weekly Approvals Clicked!')}>
            <FaClipboardCheck className="supervisor-card-icon" />
            <div className="supervisor-card-content">
              <h3>Trainee Weekly Approvals</h3>
              <p>Approve or review trainees' weekly submissions.</p>
              <div className="supervisor-progress-bar-container">
                <div className="supervisor-progress-bar" style={{ width: `${approvalProgress}%` }}>
                  {approvalProgress}%
                </div>
              </div>
            </div>
          </div>
          <div className="supervisor-card" onClick={() => alert('Pending Skills/Tasks Clicked!')}>
            <FaListAlt className="supervisor-card-icon" />
            <div className="supervisor-card-content">
              <h3>Pending Skill Acquisition/Tasks</h3>
              <p>Pending tasks or skills trainees are expected to complete.</p>
            </div>
          </div>
          <div className="supervisor-card" onClick={() => alert('Pending Skills/Tasks Clicked!')}>
            < FaClipboardCheck className="supervisor-card-icon" />
            <div className="supervisor-card-content">
              <h3>Student Behavior Approvals</h3>
              <p>This page will contain information about student behavior approvals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
