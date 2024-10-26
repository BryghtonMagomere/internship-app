import React, { useState } from 'react';
import '../styles/SupervisorDashboard.css';
import { FaBars, FaBell, FaTable, FaLock, FaSignOutAlt, FaUserTie, FaTasks, FaClipboardCheck, FaListAlt, FaPrescription } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

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
     <Outlet>
      
     </Outlet>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
