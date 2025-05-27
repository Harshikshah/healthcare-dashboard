import React, { useState } from 'react';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import './RightPanel.css';

// Path for the add button SVG icon
const plusIconPath = '/icons/plus.svg'; // Assuming you place it in public/icons/

const RightPanel = () => {
  const [plusImageError, setPlusImageError] = useState(false);

  // Function to handle image loading errors for the plus icon
  const handlePlusImageError = () => {
    setPlusImageError(true);
  };

  return (
    <div className="right-panel-container">
      {/* User Profile and Add Button */}
      <div className="user-profile-header">
        <div className="user-profile-avatar">
          {/* Using a placeholder image for the user avatar */}
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
        </div>
        <div className="add-button-container">
          {plusImageError || !plusIconPath ? (
            <span className="add-button-default-icon">+</span> // Fallback to plus character
          ) : (
            <img
              src={plusIconPath}
              alt="Add"
              className="add-button-img-icon"
              onError={handlePlusImageError}
            />
          )}
        </div>
      </div>

      {/* Calendar View Section */}
      <CalendarView />

      {/* Upcoming Schedule Section */}
      <UpcomingSchedule />
    </div>
  );
};

export default RightPanel;
