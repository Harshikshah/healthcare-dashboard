import React, { useState } from 'react';

import { calendarGridData, largeAppointmentCardsData } from '../../data/calendarData';
import './CalendarView.css';

const CalendarView = () => {
  const { monthYear, dayLabels, dates, days } = calendarGridData;

  
  const handleLargeCardImageError = (e) => {
    e.target.style.display = 'none'; 
    const defaultIconSpan = document.createElement('span');
    defaultIconSpan.className = 'large-appointment-card-default-icon';
    
    const cardId = e.target.dataset.cardId;
    const cardData = largeAppointmentCardsData.find(card => card.id === cardId);
    defaultIconSpan.textContent = cardData?.defaultIcon || '✨';
    defaultIconSpan.style.color = e.target.style.fill; 
    e.target.parentNode.insertBefore(defaultIconSpan, e.target);
  };

  return (
    <div className="calendar-view-container">
      {}
      <div className="calendar-header">
        <h3 className="calendar-month-year">{monthYear}</h3>
        <div className="calendar-nav-buttons">
          <span className="calendar-nav-icon">&lt;</span> {}
          <span className="calendar-nav-icon">&gt;</span>
        </div>
      </div>

      {}
      <div className="calendar-grid">
        {}
        {dayLabels.map((label) => (
          <div key={label} className="calendar-day-label">{label}</div>
        ))}

        {}
        {dates.map((date, index) => (
          <div key={date} className="calendar-day-cell">
            <span className="calendar-date">{date}</span>
            <div className="calendar-appointments">
              {days[index].map((time, timeIndex) => (
                <span key={timeIndex} className="calendar-appointment-time">
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {}
      <div className="large-appointment-cards-container">
        {largeAppointmentCardsData.map((card) => (
          <div
            key={card.id}
            className="large-appointment-card"
            style={{ backgroundColor: card.color, color: card.textColor }}
          >
            <div className="large-appointment-card-details">
              <h4 className="large-appointment-card-title">{card.title}</h4>
              <p className="large-appointment-card-time">{card.time}</p>
              <p className="large-appointment-card-doctor">{card.doctor}</p>
            </div>
            <div className="large-appointment-card-icon-container">
              <img
                src={card.icon}
                alt={`${card.title} icon`}
                className="large-appointment-card-img-icon"
                style={{ fill: card.textColor }} 
                onError={handleLargeCardImageError} 
                data-card-id={card.id} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
