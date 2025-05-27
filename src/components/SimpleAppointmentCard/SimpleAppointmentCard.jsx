import React, { useState } from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon, bgColor, textColor, defaultIcon }) => {
  const [imageError, setImageError] = useState(false);

  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="simple-appointment-card" style={{ backgroundColor: bgColor }}>
      <div className="simple-appointment-card-content">
        <h4 className="simple-appointment-card-title" style={{ color: textColor }}>{title}</h4>
        <p className="simple-appointment-card-time" style={{ color: textColor }}>{time}</p>
      </div>
      <div className="simple-appointment-card-icon-container">
        {imageError || !icon ? ( 
          <span className="simple-appointment-card-default-icon" style={{ color: textColor }}>
            {defaultIcon || '✨'} 
          </span>
        ) : (
          <img
            src={icon}
            alt={`${title} icon`}
            className="simple-appointment-card-img-icon"
            style={{ fill: textColor }} 
            onError={handleImageError} 
          />
        )}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
