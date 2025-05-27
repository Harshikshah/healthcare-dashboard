import React, { useState } from 'react';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import './RightPanel.css';


const plusIconPath = '/icons/plus.svg'; 

const RightPanel = () => {
  const [plusImageError, setPlusImageError] = useState(false);

  
  const handlePlusImageError = () => {
    setPlusImageError(true);
  };

  return (
    <div className="right-panel-container">
      
      <div className="user-profile-header">
        <div className="user-profile-avatar">
          
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
        </div>
        <div className="add-button-container">
          {plusImageError || !plusIconPath ? (
            <span className="add-button-default-icon">+</span> 
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

      
      <CalendarView />

      
      <UpcomingSchedule />
    </div>
  );
};

export default RightPanel;
