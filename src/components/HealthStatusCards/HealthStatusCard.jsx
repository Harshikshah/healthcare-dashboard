import React from 'react';

import './HealthStatusCard.css';

const HealthStatusCard = ({ title, status, value, lastChecked, icon, color, bgColor }) => {
  

  return (
    <div className="health-card" style={{ backgroundColor: bgColor }}>
      <div className="health-card-header">
        
        <img src={icon} alt={`${title} icon`} className="health-card-icon" style={{ fill: color }} />
        <h3 className="health-card-title" style={{ color: color }}>{title}</h3>
      </div>
      <p className="health-card-status" style={{ color: color }}>{status}</p>
      <div className="health-card-progress-bar-container">
        <div
          className="health-card-progress-bar"
          style={{ width: `${value}%`, backgroundColor: color }}
        ></div>
      </div>
      <p className="health-card-last-checked">Date: {lastChecked}</p>
    </div>
  );
};

export default HealthStatusCard;
