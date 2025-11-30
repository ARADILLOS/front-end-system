import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomersPage.css';

function CustomersPage() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const customersData = [
    { id: 1, name: 'Lou Yi', email: 'lou.yi@gmail.com', status: 'VIP', visits: 45, lastVisit: '2 hours ago', totalSpent: '$2,450' },
    { id: 2, name: 'Badang', email: 'badang.list@gmail.com', status: 'VIP', visits: 38, lastVisit: '1 day ago', totalSpent: '$1,890' },
    { id: 3, name: 'Wanwan', email: 'wan.wan@gmail.com', status: 'Returning', visits: 12, lastVisit: '3 days ago', totalSpent: '$650' },
    { id: 4, name: 'Sarah Johnson', email: 'sarah.j@gmail.com', status: 'Regular', visits: 8, lastVisit: '5 days ago', totalSpent: '$420' },
    { id: 5, name: 'Michael Chen', email: 'michael.chen@gmail.com', status: 'Regular', visits: 6, lastVisit: '1 week ago', totalSpent: '$380' },
    { id: 6, name: 'Emma Wilson', email: 'emma.w@gmail.com', status: 'VIP', visits: 52, lastVisit: '1 hour ago', totalSpent: '$3,200' },
    { id: 7, name: 'David Lee', email: 'david.lee@gmail.com', status: 'Returning', visits: 15, lastVisit: '2 days ago', totalSpent: '$890' },
    { id: 8, name: 'Sofia Martinez', email: 'sofia.m@gmail.com', status: 'Regular', visits: 5, lastVisit: '4 days ago', totalSpent: '$250' },
  ];


  const totalCustomers = '163.2K';
  const itemsPerPage = 3;
  const totalPages = Math.ceil(customersData.length / itemsPerPage);

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

  const getCurrentPageCustomers = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return customersData.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'VIP':
        return '#10b981';
      case 'Returning':
        return '#3b82f6';
      case 'Regular':
        return '#6b7280';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="customers-page">
      {/* Header Navigation */}
      <nav className="customers-navbar">
        <div className="customers-nav-left">
          <h1 className="customers-title">
            Customers
            <span className="customers-count">{totalCustomers} total</span>
          </h1>
        </div>

        <div className="customers-nav-right">
          <button className="notification-btn">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
            <span className="notification-badge">3</span>
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

                <div className="profile-menu-item active" onClick={handleCustomers}>
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

      {/* Main Content */}
      <div className="customers-content">
        {/* Top Visitors Section */}
        <div className="top-visitors-section">
          <h2 className="section-title">Top Visitors</h2>
          
          <div className="visitors-list">
            {getCurrentPageCustomers().map((customer) => (
              <div key={customer.id} className="visitor-item">
                <div className="visitor-info">
                  <div className="visitor-avatar">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#4a5568">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                  <div className="visitor-details">
                    <p className="visitor-name">{customer.name}</p>
                    <p className="visitor-email">{customer.email}</p>
                  </div>
                </div>
                <div className="visitor-status" style={{ color: getStatusColor(customer.status) }}>
                  {customer.status}
                </div>
              </div>
            ))}
          </div>

          <div className="visitors-footer">
            <p className="showing-text">
              Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, customersData.length)} of {customersData.length} customers
            </p>
            <div className="pagination">
              <button 
                className="pagination-btn" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button 
                className="pagination-btn" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CustomersPage;
