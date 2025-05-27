import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import RightPanel from './components/RightPanel/RightPanel'; // Import the new RightPanel
import './App.css';

function App() {
  return (

    <div className="app-container">
      {/* The Sidebar component, which is fixed on the left */}
      <Sidebar />

      {/* The main content area that will take up the remaining space */}
      <main className="main-content-area">
        <div className="dashboard-wrapper">
          <DashboardMainContent />
        </div>
      </main>
      <div className="righpanel-wrapper">
      <RightPanel />  
      </div>
    </div>
  );
}

export default App;