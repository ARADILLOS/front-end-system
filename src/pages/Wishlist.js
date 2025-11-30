import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Wishlist.css';
import './BusinessOwnerDashboard.css';

function Sparkline({ data = [], width = 160, height = 40 }) {
  const [hover, setHover] = useState(null);
  const svgRef = useRef(null);

  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const gap = width / (data.length - 1);

  const points = data
    .map((d, i) => {
      const x = i * gap;
      const y = height - ((d - min) / (max - min || 1)) * height;
      return `${x},${y}`;
    })
    .join(' ');

  function handleMove(e) {
    const rect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const idx = Math.round((x / width) * (data.length - 1));
    setHover({ idx: Math.max(0, Math.min(data.length - 1, idx)), x });
  }

  return (
    <div className="sparkline-wrapper">
      <svg
        ref={svgRef}
        className="sparkline-svg"
        width={width}
        height={height}
        onMouseMove={handleMove}
        onMouseLeave={() => setHover(null)}
      >
        <polyline fill="none" stroke="#cbd5e1" strokeWidth="12" strokeLinecap="round" points={points} opacity="0.25" />
        <polyline fill="none" stroke="#0f1724" strokeWidth="3" strokeLinecap="round" points={points} />
        {hover && (
          <g>
            <circle
              cx={(hover.idx * gap).toString()}
              cy={
                height - ((data[hover.idx] - min) / (max - min || 1)) * height
              }
              r="4"
              fill="#0f1724"
            />
          </g>
        )}
      </svg>

      {hover && (
        <div className="spark-tooltip" style={{ left: hover.x }}>
          {data[hover.idx]}
        </div>
      )}
    </div>
  );
}

export default function Wishlist() {
  const navigate = useNavigate();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileClick = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleProfilePage = () => {
    setProfileMenuOpen(false);
    navigate('/profile');
  };

  const handleCustomers = () => {
    setProfileMenuOpen(false);
    navigate('/customers');
  };

  const handleWishlistNav = () => {
    setProfileMenuOpen(false);
    navigate('/wishlist');
  };

  const handleLogout = () => {
    setProfileMenuOpen(false);
    navigate('/');
  };

  function handleProfileImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setProfileImage(event.target.result);
      reader.readAsDataURL(file);
    }
  }

  
  const testimonials = [
    {
      id: 1,
      message: 'Impressed by the professionalism and attention to detail.',
      name: 'Guy Hawkins',
      handle: '@guyhawkins',
      avatar: null,
      chart: [12, 18, 25, 28, 26, 30, 34]
    },
    {
      id: 2,
      message: 'A seamless experience from start to finish. Highly recommend!',
      name: 'Karla Lynn',
      handle: '@karlalynn98',
      avatar: null,
      chart: [8, 12, 20, 22, 20, 26, 30]
    },
    {
      id: 3,
      message: 'Reliable and trustworthy. Made my life so much easier!',
      name: 'Jane Cooper',
      handle: '@janecooper',
      avatar: null,
      chart: [10, 14, 16, 20, 24, 22, 28]
    }
  ];

  return (
    <div>
      <nav className="dashboard-navbar">
        <div className="nav-left">
          <div className="dashboard-logo">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="#667eea">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          </div>
          <h3 className="dashboard-title">Business Owner Dashboard</h3>
        </div>

        <div className="nav-right">
          <button className="nav-icon-btn" title="Home" onClick={() => navigate('/home')}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#0f1724">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </button>

          <div className="notification-wrapper">
            <button className="notification-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#0f1724">
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
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#374151">
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
                      <svg viewBox="0 0 24 24" width="40" height="40" fill="#4a5568"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
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

                <div className="profile-menu-item" onClick={() => { setProfileMenuOpen(false); navigate('/business-owner-dashboard'); }}>
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

                <div className="profile-menu-item" onClick={handleWishlistNav}>
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

      <div className="wishlist-page">
        <div className="wishlist-header">
          <p className="wishlist-sub">Testimonial</p>
          <h2 className="wishlist-title">Transformative Client Experiences</h2>
        </div>

        <div className="wishlist-grid">
          {testimonials.map((t) => (
            <article key={t.id} className="wish-card">
              <div className="quote-mark">“</div>
              <p className="wish-message">{t.message}</p>

              <div className="wish-footer">
                <div className="author">
                  <div className="avatar">
                    {/* placeholder avatar */}
                    <svg viewBox="0 0 24 24" width="36" height="36" fill="#374151">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                  <div className="author-info">
                    <div className="author-name">{t.name}</div>
                    <div className="author-handle">{t.handle}</div>
                  </div>
                </div>

                <div className="card-chart">
                  <Sparkline data={t.chart} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
