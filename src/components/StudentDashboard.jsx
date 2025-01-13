import React, { useState } from 'react';
import './StudentDashboard.css';
import { FaBars, FaUser, FaTasks, FaBook, FaChartLine, FaBell, FaLock, FaSignOutAlt, FaGraduationCap, FaCalendarAlt, FaLifeRing, FaToolbox } from 'react-icons/fa';

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
            <a href="#development-track">
              <FaToolbox className="student-sidebar-icon" />
              <span>Development Track</span>
            </a>
          </li>
          <li>
            <a href="#resources">
              <FaGraduationCap className="student-sidebar-icon" />
              <span>Resources</span>
            </a>
          </li>
          <li>
            <a href="#notifications">
              <FaBell className="student-sidebar-icon" />
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a href="#calendar">
              <FaCalendarAlt className="student-sidebar-icon" />
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a href="#support">
              <FaLifeRing className="student-sidebar-icon" />
              <span>Support & Help</span>
            </a>
          </li>
          <li>
            <a href="#report">
              <FaChartLine className="student-sidebar-icon" />
              <span>Report</span>
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
          <div className="student-card" onClick={() => alert('User Profile Clicked!')}>
            <FaUser className="student-card-icon" />
            <div className="student-card-content">
              <h3>User Profile</h3>
              <p>Manage your personal information and settings.</p>
            </div>
          </div>
          <div className="student-card" onClick={() => alert('Placement Information Clicked!')}>
            <FaChartLine className="student-card-icon" />
            <div className="student-card-content">
              <h3>Placement Information</h3>
              <p>Details of the placement company and role.</p>
            </div>
          </div>
          <div className="student-card" onClick={() => alert('Logbook Entries Clicked!')}>
            <FaBook className="student-card-icon" />
            <div className="student-card-content">
              <h3>Logbook Entries</h3>
              <p>Record weekly experiences and reflections.</p>
            </div>
          </div>
          <div className="student-card" onClick={() => alert('Task Management Clicked!')}>
            <FaTasks className="student-card-icon" />
            <div className="student-card-content">
              <h3>Task Management</h3>
              <p>Assigned tasks with due dates.</p>
            </div>
          </div>
          <div className="student-card" onClick={() => alert('Performance Metrics Clicked!')}>
            <FaChartLine className="student-card-icon" />
            <div className="student-card-content">
              <h3>Performance Metrics</h3>
              <p>Visual dashboard of performance analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
