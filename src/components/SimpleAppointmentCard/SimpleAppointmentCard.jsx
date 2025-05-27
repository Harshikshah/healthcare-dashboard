import React, { useState } from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon, bgColor, textColor, defaultIcon }) => {
  const [imageError, setImageError] = useState(false);

  // Function to handle image loading errors
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
        {imageError || !icon ? ( // Show default icon if image fails or icon path is missing
          <span className="simple-appointment-card-default-icon" style={{ color: textColor }}>
            {defaultIcon || '✨'} {/* Fallback to a generic emoji if defaultIcon is not provided */}
          </span>
        ) : (
          <img
            src={icon}
            alt={`${title} icon`}
            className="simple-appointment-card-img-icon"
            style={{ fill: textColor }} // Attempt to color SVG via fill
            onError={handleImageError} // Set error handler
          />
        )}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
