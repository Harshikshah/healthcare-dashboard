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
import './Sidebar.css'; // Import the CSS file

// Sidebar component definition
const Sidebar = () => {
  // Define General navigation items
  const generalNavItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'History', icon: History, path: '/history' },
    { name: 'Calendar', icon: Calendar, path: '/calendar' },
    { name: 'Appointments', icon: ClipboardList, path: '/appointments' },
    { name: 'Statistics', icon: BarChart2, path: '/statistics' },
  ];

  // Define Tools navigation items
  const toolsNavItems = [
    { name: 'Chat', icon: MessageSquare, path: '/chat' },
    { name: 'Support', icon: LifeBuoy, path: '/support' },
  ];

  // State to manage the active navigation item (for styling purposes)
  // For a static dashboard, 'Dashboard' is set as active by default.
  const activeItem = 'Dashboard';

  return (
    <div className="sidebar-container">
      {/* Healthcare Logo Section */}
      <div className="sidebar-logo">
        <HeartPulse className="sidebar-logo-icon" size={28} strokeWidth={2.5} />
        <h1 className="sidebar-logo-text">Healthcare.</h1>
      </div>

      {/* Main Navigation Section */}
      <nav className="sidebar-nav">
        {/* General Category */}
        <h2 className="sidebar-category-heading">General</h2>
        <ul className="sidebar-nav-list">
          {generalNavItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path} // Placeholder for navigation.
                className={`sidebar-nav-item ${activeItem === item.name ? 'active' : ''}`}
              >
                <item.icon className="sidebar-nav-icon" size={20} />
                <span className="sidebar-nav-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Tools Category */}
        <h2 className="sidebar-category-heading">Tools</h2>
        <ul className="sidebar-nav-list">
          {toolsNavItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path} // Placeholder for navigation.
                className={`sidebar-nav-item ${activeItem === item.name ? 'active' : ''}`}
              >
                <item.icon className="sidebar-nav-icon" size={20} />
                <span className="sidebar-nav-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Independent Settings Link at the Bottom */}
      <div className="sidebar-settings">
        <a
          href="/settings" // Placeholder for navigation.
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
