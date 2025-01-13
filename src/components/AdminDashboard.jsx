import React, { useState } from 'react';
import '../styles/AdminDashboard.css';
import { FaBars, FaUserCog, FaTasks, FaUsers, FaChartLine, FaClipboard, FaSignOutAlt, FaBell, FaFolderOpen, FaCalendarAlt, FaLock, FaFileAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sample data for admin
  const adminName = "Admin Name";
  const importantMetric1 = 35; // Placeholder for active trainees
  const importantMetric2 = 75; // Placeholder for ongoing placements

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <div className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="admin-sidebar-links">
          <li>
            <a href="#notifications">
              <FaBell className="admin-sidebar-icon" />
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a href="#document-management">
              <FaFolderOpen className="admin-sidebar-icon" />
              <span>Document Management</span>
            </a>
          </li>
          <li>
            <a href="#reports">
              <FaClipboard className="admin-sidebar-icon" />
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a href="#feedback-survey">
              <FaFileAlt className="admin-sidebar-icon" />
              <span>Feedback & Survey</span>
            </a>
          </li>
          <li>
            <a href="#calendar">
              <FaCalendarAlt className="admin-sidebar-icon" />
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a href="#reset-password">
              <FaLock className="admin-sidebar-icon" />
              <span>Reset Password</span>
            </a>
          </li>
          <li>
            <a href="#logout">
              <FaSignOutAlt className="admin-sidebar-icon" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`admin-main-content ${isSidebarOpen ? '' : 'full-width'}`}>
        <div className={`admin-top-navbar ${isSidebarOpen ? '' : 'full-width-navbar'}`}>
          <button className="admin-burger-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <h2>Welcome, {adminName}</h2>
          <button className="admin-logout-btn">Logout</button>
        </div>
        <div className="admin-section-container">
          <div className="admin-card" onClick={() => alert('Profile Management Clicked!')}>
            <FaUserCog className="admin-card-icon" />
            <div className="admin-card-content">
              <h3>Profile Management</h3>
              <p>Manage your account information and settings.</p>
            </div>
          </div>
          <div className="admin-card" onClick={() => alert('Placement Management Clicked!')}>
            <FaChartLine className="admin-card-icon" />
            <div className="admin-card-content">
              <h3>Placement Management</h3>
              <p>Overview of all ongoing placements and their statuses.</p>
            </div>
          </div>
          <div className="admin-card" onClick={() => alert('User Management Clicked!')}>
            <FaUsers className="admin-card-icon" />
            <div className="admin-card-content">
              <h3>User Management</h3>
              <p>Manage users, roles, and permissions.</p>
            </div>
          </div>
          <div className="admin-card" onClick={() => alert('Task Management Clicked!')}>
            <FaTasks className="admin-card-icon" />
            <div className="admin-card-content">
              <h3>Task Management</h3>
              <p>View tasks that need attention and manage deadlines.</p>
            </div>
          </div>
          <div className="admin-card" onClick={() => alert('Dashboard Overview Clicked!')}>
            <FaClipboard className="admin-card-icon" />
            <div className="admin-card-content">
              <h3>Dashboard Overview</h3>
              <p>Important metrics and status updates.</p>
              <div className="admin-progress-bar-container">
                <div className="admin-progress-bar" style={{ width: `${importantMetric1}%` }}>
                  {importantMetric1}% Active Trainees
                </div>
              </div>
              <div className="admin-progress-bar-container">
                <div className="admin-progress-bar" style={{ width: `${importantMetric2}%` }}>
                  {importantMetric2}% Ongoing Placements
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
