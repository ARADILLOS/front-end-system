import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BusinessOwnerDashboard.css';

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [userName] = useState('Mica');
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const stats = [
    {
      id: 1,
      title: 'Total Inquiry',
      value: '53.8K',
      icon: (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="#4a5568">
          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Total Visits',
      value: '87.6K',
      icon: (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="#4a5568">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Wish List Items',
      value: '1.8K',
      icon: (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="#4a5568">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    }
  ];

  const statusItems = [
    {
      id: 1,
      label: 'Business Profile',
      status: 'Active',
      statusColor: '#22c55e',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      )
    },
    {
      id: 2,
      label: 'Engagement Level',
      status: 'High',
      statusColor: '#000',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      )
    },
    {
      id: 3,
      label: 'Last Update',
      status: '3 days ago',
      statusColor: '#000',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
        </svg>
      )
    },
    {
      id: 4,
      label: 'Location Accuracy',
      status: 'Verified',
      statusColor: '#22c55e',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      )
    },
    {
      id: 5,
      label: 'Pending Tasks',
      status: '2 tasks',
      statusColor: '#000',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const handleHome = () => {
    navigate('/home');
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileClick = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleProfilePage = () => {
    navigate('/profile');
  };

  const handleCustomers = () => {
    navigate('/customers');
  };

  const handleWishlist = () => {
    // Close profile menu and navigate to the Wishlist page
    setProfileMenuOpen(false);
    navigate('/wishlist');
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-navbar">
        <div className="nav-left">
          <div className="dashboard-logo">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="#667eea">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          </div>
          <h3 className="dashboard-title">Business Owner Dashboard</h3>
        </div>
        <div className="nav-right">
          <button className="nav-icon-btn" onClick={handleHome} title="Home">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </button>
          <div className="notification-wrapper">
            <button className="notification-btn">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
              <span className="notification-badge">3</span>
            </button>
          </div>
          <div className="profile-wrapper">
            <button className="profile-btn" onClick={handleProfileClick}>
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-image" />
              ) : (
                <svg viewBox="0 0 24 24" width="32" height="32" fill="#4a5568">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              )}
            </button>
            
            {profileMenuOpen && (
              <div className="profile-dropdown">
                <div className="profile-dropdown-header">
                  <div className="profile-avatar-large">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="profile-image-large" />
                    ) : (
                      <svg viewBox="0 0 24 24" width="40" height="40" fill="#4a5568">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="profile-name">Eych Catipay</h3>
                </div>

                <div className="profile-menu-item" onClick={handleProfilePage}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                  <span>Profile</span>
                </div>

                <div className="profile-divider"></div>

                <div className="profile-menu-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                  <span>Overview</span>
                </div>

                <div className="profile-menu-item" onClick={handleCustomers}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                  <span>Customers</span>
                </div>

                <div className="profile-menu-item" onClick={handleWishlist}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>Wishlist</span>
                </div>

                <div className="profile-divider"></div>

                <div className="profile-menu-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                  <span>Settings & privacy</span>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="arrow-icon">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </div>

                <div className="profile-divider"></div>

                <div className="profile-menu-item" onClick={handleLogout}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                  </svg>
                  <span>Log Out</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h1>Welcome Back, {userName}</h1>
          <p>Here's what's happening with your store activity</p>
        </div>

        <div className="overview-section">
          <div className="metric-cards-row">
            {stats.map((s) => (
              <div key={s.id} className="metric-card">
                <div className="metric-label">{s.title}</div>
                <div className="metric-icon">{s.icon}</div>
                <div className="metric-value">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="status-summary-card">
            <div className="status-summary-title">Status Summary</div>
            <div className="status-items">
              {statusItems.map((item) => (
                <div key={item.id} className="status-row">
                  <div className="status-left">
                    <div className="status-icon">{item.icon}</div>
                    <div className="status-label">{item.label}</div>
                  </div>
                  <div className="status-value" style={{ color: item.statusColor }}>{item.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Suggestion Box / Wishlist removed per request */}

        <input
          type="file"
          id="profile-upload"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleProfileImageChange}
        />
      </div>
    </div>
  );
}

export default Dashboard;
