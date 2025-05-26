import React from 'react';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import './DashboardMainContent.css';
import { Search, Bell, ChevronDown } from 'lucide-react';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

// Ensure 'human-anatomy.svg' is in your 'public' folder
const humanAnatomyImagePath = '/human-anatomy.svg';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      {/* Top Bar / Header Section within Main Content */}
      <div className="main-content-header">
        <div className="search-bar-container">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
          <Bell size={20} className="notification-icon-in-search" />
        </div>
        {/* Removed user profile/avatar and add button */}
      </div>

      {/* Dashboard Title and "This Week" dropdown */}
      <div className="dashboard-title-section">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="this-week-dropdown">
          <span>This Week</span>
          <ChevronDown size={16} className="dropdown-arrow-icon" />
        </div>
      </div>

      {/* Main Content Grid: Anatomy + Health Status Cards */}
      <div className="anatomy-cards-grid">
        {/* Anatomy Section */}
        {/* Removed inline styles for width and height here */}
        <div className="anatomy-section">
          {/* Removed inline style for height here */}
          <img src={humanAnatomyImagePath} alt="Human Anatomy" className="human-anatomy-img" />
          {/* Placeholder for "Healthy Heart" and "Healthy Leg" labels */}
          <div className="health-label healthy-heart">Healthy Heart</div>
          <div className="health-label healthy-leg">Healthy Leg</div>
          {/* Placeholder for zoom icon */}
          <div className="zoom-icon-container">
            <Search size={16} className="zoom-icon" />
          </div>
          {/* Placeholder for bottom slider/indicator */}
        </div>

        {/* Health Status Cards Section */}
        <div className="health-status-cards-section">
          <HealthStatusCards />
        </div>
      </div>

      {/* Placeholder for Activity Section - will be added below the grid */}
      <div className="activity-section-placeholder">
      <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardMainContent;
