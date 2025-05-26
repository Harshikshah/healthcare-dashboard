import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import './App.css';

function App() {
  return (

    <div className="app-container">
      {/* The Sidebar component, which is fixed on the left */}
      <Sidebar />

      {/* The main content area that will take up the remaining space */}
      <main className="main-content-area">
        <div className="dashboard-wrapper">
          {/* The DashboardMainContent component, which will house all other dashboard sections */}
          <DashboardMainContent />
        </div>
      </main>
    </div>
  );
}

export default App;