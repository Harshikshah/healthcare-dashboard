import React from 'react';
import HealthStatusCard from './HealthStatusCard'; 
import { healthStatusData } from '../../data/healthData'; 
import './HealthStatusCards.css';

const HealthStatusCards = () => {
  return (
    <div className="health-cards-container">
      {healthStatusData.map((data) => (
        <HealthStatusCard
          key={data.id} 
          title={data.title}
          status={data.status}
          value={data.value}
          lastChecked={data.lastChecked}
          icon={data.icon}
          color={data.color}
          bgColor={data.bgColor}
        />
      ))}
    </div>
  );
};

export default HealthStatusCards;
