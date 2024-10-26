import React, { useState } from 'react';
import './StudentDashboard.css';
import { FaBars, FaUser, FaTasks, FaBook, FaFileAlt, FaChartLine, FaBell, FaLock, FaSignOutAlt, FaGraduationCap, FaTable } from 'react-icons/fa';

const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sample data for student
  const studentName = "Bryghton";
  const placementProgress = 57; 

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="student-dashboard-container">
      {/* Sidebar */}
      <div className={`student-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="student-sidebar-links">
          <li>
            <a href="#dashboard">
              <FaChartLine className="student-sidebar-icon" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#course">
              <FaGraduationCap className="student-sidebar-icon" />
              <span>Course</span>
            </a>
          </li>
          <li>
            <a href="#report">
              <FaTable className="student-sidebar-icon" />
              <span>Report</span>
            </a>
          </li>
          <li>
            <a href="#notifications">
              <FaBell className="student-sidebar-icon" />
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a href="#documents">
              <FaFileAlt className="student-sidebar-icon" />
              <span>Important Documents</span>
            </a>
          </li>
          <li>
            <a href="#reset-password">
              <FaLock className="student-sidebar-icon" />
              <span>Reset Password</span>
            </a>
          </li>
          <li>
            <a href="#logout">
              <FaSignOutAlt className="student-sidebar-icon" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`student-main-content ${isSidebarOpen ? '' : 'full-width'}`}>
        <div className={`student-top-navbar ${isSidebarOpen ? '' : 'full-width-navbar'}`}>
          <button className="student-burger-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <h2>Welcome, {studentName}</h2>
          <button className="student-logout-btn">Logout</button>
        </div>
        <div className="student-section-container">
          <div className="student-card" onClick={() => alert('Current Placement Info Clicked!')}>
            <FaUser className="student-card-icon" />
            <div className="student-card-content">
              <h3>Current Placement Information</h3>
              <p>Details of your ongoing internship or attachment.</p>
            </div>
          </div>
          <div className="student-card" onClick={() => alert('Pending Tasks Clicked!')}>
            <FaTasks className="student-card-icon" />
            <div className="student-card-content">
              <h3>Pending Tasks</h3>
              <p>Tasks assigned to you during your placement.</p>
            </div>
          </div>
          <div className="student-card" onClick={() => alert('Logbook Entries Clicked!')}>
            <FaBook className="student-card-icon" />
            <div className="student-card-content">
              <h3>Logbook Entries</h3>
              <p>Record your daily activities during your placement.</p>
            </div>
          </div>
          <div className="student-card" onClick={() => alert('Placement Progress Clicked!')}>
            <FaChartLine className="student-card-icon" />
            <div className="student-card-content">
              <h3>Placement Progress</h3>
              <div className="student-progress-bar-container">
                <div className="student-progress-bar" style={{ width: `${placementProgress}%` }}>
                  {placementProgress}%
                </div>
              </div>
              <p>Your current progress in the attachment journey.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
