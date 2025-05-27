import React from 'react';
import {
  LayoutDashboard,
  History,
  Calendar,
  ClipboardList,
  BarChart2,
  MessageSquare,
  LifeBuoy,
  Settings,
  HeartPulse,
} from 'lucide-react';
import './Sidebar.css'; 


const Sidebar = () => {
  
  const generalNavItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'History', icon: History, path: '/history' },
    { name: 'Calendar', icon: Calendar, path: '/calendar' },
    { name: 'Appointments', icon: ClipboardList, path: '/appointments' },
    { name: 'Statistics', icon: BarChart2, path: '/statistics' },
  ];

  
  const toolsNavItems = [
    { name: 'Chat', icon: MessageSquare, path: '/chat' },
    { name: 'Support', icon: LifeBuoy, path: '/support' },
  ];

  
  
  const activeItem = 'Dashboard';

  return (
    <div className="sidebar-container">
      
      <div className="sidebar-logo">
        <HeartPulse className="sidebar-logo-icon" size={28} strokeWidth={2.5} />
        <h1 className="sidebar-logo-text">Healthcare.</h1>
      </div>

      
      <nav className="sidebar-nav">
        
        <h2 className="sidebar-category-heading">General</h2>
        <ul className="sidebar-nav-list">
          {generalNavItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path} 
                className={`sidebar-nav-item ${activeItem === item.name ? 'active' : ''}`}
              >
                <item.icon className="sidebar-nav-icon" size={20} />
                <span className="sidebar-nav-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        
        <h2 className="sidebar-category-heading">Tools</h2>
        <ul className="sidebar-nav-list">
          {toolsNavItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path} 
                className={`sidebar-nav-item ${activeItem === item.name ? 'active' : ''}`}
              >
                <item.icon className="sidebar-nav-icon" size={20} />
                <span className="sidebar-nav-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      
      <div className="sidebar-settings">
        <a
          href="/settings" 
          className="sidebar-nav-item"
        >
          <Settings className="sidebar-nav-icon" size={20} />
          <span className="sidebar-nav-text">Setting</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
