import React from 'react';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import './DashboardMainContent.css';
import { Search, Bell, ChevronDown } from 'lucide-react';
import ActivityFeed from '../ActivityFeed/ActivityFeed';


const humanAnatomyImagePath = '/human-anatomy.svg';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      
      <div className="main-content-header">
        <div className="search-bar-container">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
          <Bell size={20} className="notification-icon-in-search" />
        </div>
        
      </div>

      
      <div className="dashboard-title-section">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="this-week-dropdown">
          <span>This Week</span>
          <ChevronDown size={16} className="dropdown-arrow-icon" />
        </div>
      </div>

      
      <div className="anatomy-cards-grid">
        
        
        <div className="anatomy-section">
          
          <img src={humanAnatomyImagePath} alt="Human Anatomy" className="human-anatomy-img" />
          
          <div className="health-label healthy-heart">Healthy Heart</div>
          <div className="health-label healthy-leg">Healthy Leg</div>
          
          <div className="zoom-icon-container">
            <Search size={16} className="zoom-icon" />
          </div>
          
        </div>

        
        <div className="health-status-cards-section">
          <HealthStatusCards />
        </div>
      </div>

      
      <div className="activity-section-placeholder">
      <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardMainContent;
