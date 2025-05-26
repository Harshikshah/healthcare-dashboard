import React from 'react';
import './ActivityFeed.css'; // Import the CSS for this component

const ActivityFeed = () => {
  // Data for the activity bars, representing heights for two types of activities
  // These values are illustrative and designed to visually match the screenshot.
  const activityData = [
    { day: 'Mon', bars: [{ height: '60%', type: 'dark-blue' }, { height: '30%', type: 'light-blue' }] },
    { day: 'Tues', bars: [{ height: '40%', type: 'light-blue' }, { height: '70%', type: 'dark-blue' }] },
    { day: 'Wed', bars: [{ height: '50%', type: 'dark-blue' }, { height: '20%', type: 'light-blue' }] },
    { day: 'Thurs', bars: [{ height: '80%', type: 'light-blue' }, { height: '40%', type: 'dark-blue' }] },
    { day: 'Fri', bars: [{ height: '70%', type: 'dark-blue' }, { height: '50%', type: 'light-blue' }] },
    { day: 'Sat', bars: [{ height: '30%', type: 'light-blue' }, { height: '60%', type: 'dark-blue' }] },
    { day: 'Sun', bars: [{ height: '20%', type: 'dark-blue' }, { height: '40%', type: 'light-blue' }] },
  ];

  return (
    <div className="activity-feed-container">
      {/* Header section for Activity */}
      <div className="activity-feed-header">
        <h3 className="activity-feed-title">Activity</h3>
        <p className="activity-feed-subtitle">3 appointments on this week</p>
      </div>

      {/* Chart area for activity bars */}
      <div className="activity-chart-area">
        {activityData.map((data, index) => (
          <div key={index} className={`activity-day-column ${index < activityData.length - 1 ? 'has-separator' : ''}`}>
            {/* Render each bar for the day */}
            {data.bars.map((bar, barIndex) => (
              <div
                key={barIndex}
                className={`activity-bar activity-bar-${bar.type}`}
                style={{ height: bar.height }}
              ></div>
            ))}
            {/* Day label */}
            <span className="activity-day-label">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
