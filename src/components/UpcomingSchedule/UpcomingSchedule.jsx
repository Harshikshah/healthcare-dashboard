import React from 'react';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import { upcomingScheduleData } from '../../data/calendarData';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-container">
      <h3 className="upcoming-schedule-title">The Upcoming Schedule</h3>
      {upcomingScheduleData.map((dayData) => (
        <div key={dayData.day} className="upcoming-schedule-day-group">
          <p className="upcoming-schedule-day-label">{dayData.day}</p>
          <div className="upcoming-schedule-cards-grid">
            {dayData.appointments.map((appointment) => (
              <SimpleAppointmentCard
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
                bgColor={appointment.bgColor}
                textColor={appointment.textColor}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
