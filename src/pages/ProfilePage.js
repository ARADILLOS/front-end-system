import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

function ProfilePage() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [notificationCount] = useState(5);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const businessInfo = {
    name: '10K Roses',
    subtitle: 'Coffee Shop, Restaurant',
    description: '10000 Roses Cafe & More is a whimsical garden café featuring 10,000 artificial LED roses that illuminate the night with a magical glow. Located in Cordova, Cebu, this enchanting spot offers a serene ambiance, picturesque views, and a cozy café experience that\'s become a must-visit destination for locals and tourists alike.',
    rating: 4.8,
    reviews: '5.3K reviews',
    status: 'Open Now',
    address: 'Day-as Barangay Rd, Cordova, Cebu, Philippines',
    phone: '(916) 553-0123',
    email: '10kRoses@gmail.com',
    location: {
      lat: 10.2513,
      lng: 123.9447
    },
    storeHours: {
      weekday: '9:00 AM - 7:00 PM',
      saturday: '10:00 AM - 8:00 PM',
      sunday: '11:00 AM - 5:00 PM'
    },
    certifications: [
      'Sustainable Business Certified',
      'Local Business Alliance',
      'Fair Trade Partner'
    ],
    gallery: [
      '/images/roses1.jpg',
      '/images/roses2.jpg',
      '/images/roses3.jpg',
      '/images/roses4.jpg',
      '/images/roses5.jpg'
    ]
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHome = () => {
    navigate('/business-owner-dashboard');
  };

  const handleGallery = () => {
    document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEditDetails = () => {
    // Edit details functionality
    console.log('Edit details clicked');
  };

  const handleAddPhotos = () => {
    document.getElementById('gallery-upload')?.click();
  };

  const handleGalleryUpload = (e) => {
    console.log('Gallery photos uploaded:', e.target.files);
  };

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleProfilePage = () => {
    navigate('/profile');
    setShowProfileMenu(false);
  };

  const handleOverview = () => {
    navigate('/business-owner-dashboard');
    setShowProfileMenu(false);
  };

  const handleCustomers = () => {
    navigate('/customers');
    setShowProfileMenu(false);
  };

  const handleWishlist = () => {
    console.log('Navigate to wishlist');
    setShowProfileMenu(false);
  };

  const handleSettings = () => {
    console.log('Navigate to settings');
    setShowProfileMenu(false);
  };

  const handleLogout = () => {
    console.log('Logging out');
    navigate('/login');
    setShowProfileMenu(false);
  };

  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const destLat = businessInfo.location.lat;
          const destLng = businessInfo.location.lng;
          
          // Open Google Maps with directions
          window.open(
            `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destLat},${destLng}`,
            '_blank'
          );
        },
        (error) => {
          console.error('Error getting location:', error);
          // Fallback: open Google Maps with just the destination
          window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${businessInfo.location.lat},${businessInfo.location.lng}`,
            '_blank'
          );
        }
      );
    } else {
      // Fallback for browsers that don't support geolocation
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${businessInfo.location.lat},${businessInfo.location.lng}`,
        '_blank'
      );
    }
  };

  return (
    <div className="profile-page">
      {/* Header Navigation */}
      <nav className="profile-navbar">
        <div className="profile-nav-left">
          <div className="business-logo">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="#fff">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.93 0 3.5 1.57 3.5 3.5S13.93 12 12 12s-3.5-1.57-3.5-3.5S10.07 5 12 5zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
          <div className="business-title">
            <h2>{businessInfo.name}</h2>
            <p>{businessInfo.subtitle}</p>
          </div>
        </div>

        <div className="profile-nav-right">
          <button className="nav-icon-link" onClick={handleHome} title="Home">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </button>

          <button className="notification-btn">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
            {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
          </button>
          
          <div className="profile-icon-wrapper">
            <button className="profile-btn" onClick={handleProfileClick}>
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-image" />
              ) : (
                <svg viewBox="0 0 24 24" width="32" height="32" fill="#4a5568">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              )}
            </button>
            
            {showProfileMenu && (
              <div className="profile-dropdown-menu">
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

                <div className="profile-menu-divider"></div>

                <div className="profile-menu-item" onClick={handleOverview}>
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

                <div className="profile-menu-divider"></div>

                <div className="profile-menu-item" onClick={handleSettings}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                  <span>Settings & privacy</span>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="arrow-icon">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </div>

                <div className="profile-menu-divider"></div>

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

      {/* Hero Banner Section */}
      <div className="hero-banner">
        <img src="/images/roses-banner.jpg" alt="10K Roses" className="banner-image" />
        <div className="banner-overlay">
          <button className="edit-details-btn" onClick={handleEditDetails}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
            Edit Details
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="profile-content">
        {/* Main Column */}
        <div className="profile-main">
          {/* Business Info Section */}
          <div className="info-section">
            <button className="edit-details-link" onClick={handleEditDetails}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
              Edit Details
            </button>

            <h1 className="business-name">Step into a dreamscape at 10,000 Roses Cafe & More</h1>
            
            <p className="business-description">{businessInfo.description}</p>

            <div className="rating-section">
              <span className="rating-stars">★ {businessInfo.rating}</span>
              <span className="rating-reviews">({businessInfo.reviews})</span>
              <span className="status-badge open">● {businessInfo.status}</span>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="gallery-section" id="gallery-section">
            <h2 className="section-title">Gallery</h2>
            <div className="gallery-grid">
              {businessInfo.gallery.map((photo, index) => (
                <div key={index} className="gallery-item">
                  <img src={photo} alt={`Gallery ${index + 1}`} />
                </div>
              ))}
              <div className="gallery-item add-photo-item" onClick={handleAddPhotos}>
                <svg viewBox="0 0 24 24" width="32" height="32" fill="#999">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
                <p>Add Photo</p>
              </div>
            </div>
            <input
              type="file"
              id="gallery-upload"
              multiple
              accept="image/*"
              onChange={handleGalleryUpload}
              style={{ display: 'none' }}
            />
          </div>

          {/* About Section */}
          <div className="about-section">
            <div className="section-header">
              <h2 className="section-title">About 10K Roses</h2>
              <button className="edit-details-link" onClick={handleEditDetails}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
                Edit Details
              </button>
            </div>
            <p className="about-text">{businessInfo.description}</p>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="profile-sidebar">
          {/* Contact Information Card */}
          <div className="sidebar-card contact-card">
            <h3 className="card-title">Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="contact-details">
                <p className="contact-label">Address</p>
                <p className="contact-value">{businessInfo.address}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="contact-details">
                <p className="contact-label">Phone</p>
                <p className="contact-value">{businessInfo.phone}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="contact-details">
                <p className="contact-label">Email</p>
                <p className="contact-value">{businessInfo.email}</p>
              </div>
            </div>

            <div className="social-links">
              <p className="social-label">Follow Us</p>
              <div className="social-icons">
                <button className="social-btn">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2C5.6 4 4 5.6 4 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8c2 0 3.6-1.6 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6m9.65 1.5c.7 0 1.25.55 1.25 1.25S17.95 8 17.25 8s-1.25-.55-1.25-1.25.55-1.25 1.25-1.25M12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5m0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
                  </svg>
                </button>
                <button className="social-btn">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17 2H7C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5zm-5 15.5c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm7-11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                  </svg>
                </button>
                <button className="social-btn">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.52-1.53-2.66 0-4.82 2.16-4.82 4.82 0 .38.04.75.13 1.1-4-.2-7.55-2.12-9.92-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.15 2.14 4.01-.79-.02-1.53-.24-2.18-.6v.06c0 2.34 1.66 4.29 3.87 4.73-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.43 3.35 4.57 3.39-1.67 1.31-3.78 2.09-6.07 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63.96-.69 1.8-1.56 2.46-2.55z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Store Hours Card */}
          <div className="sidebar-card hours-card">
            <div className="sidebar-header">
              <div className="sidebar-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                </svg>
              </div>
              <h3 className="sidebar-title">Store Hours</h3>
            </div>
            <div className="sidebar-content">
              <div className="hours-list">
                <div className="hours-item">
                  <span className="hours-day">Monday - Friday</span>
                  <span className="hours-time">{businessInfo.storeHours.weekday}</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Saturday</span>
                  <span className="hours-time">{businessInfo.storeHours.saturday}</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">{businessInfo.storeHours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="sidebar-card certifications-card">
            <div className="sidebar-header">
              <div className="sidebar-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="sidebar-title">Certifications</h3>
            </div>
            <div className="sidebar-content">
            <ul className="cert-list">
              {businessInfo.certifications.map((cert, index) => (
                <li key={index} className="cert-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#10b981">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  {cert}
                </li>
              ))}
            </ul>
            </div>
          </div>

          {/* Location Card */}
          <div className="sidebar-card location-card">
            <div className="sidebar-header">
              <div className="sidebar-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="sidebar-title">Location</h3>
            </div>
            <div className="sidebar-content">
              <div className="map-container">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.8!2d${businessInfo.location.lng}!3d${businessInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9997c214b0d5b%3A0x2e8f0e5b7e5f0e5b!2s10000%20Roses%20Cafe!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph`}
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
              <button className="directions-btn" onClick={handleGetDirections}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
                </svg>
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
