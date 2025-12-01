import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-header">
        <img src="logo.jpg" alt="Logo" className="landing-logo" />
        <h3 className="landing-title">LOCAFY</h3>
      </div>
      
      <div className="landing-content">
        <h1 className="welcome-title">WELCOME TO<br /><span className="highlight">LOCAFY</span></h1>
        
        <div className="landing-buttons">
          <button 
            className="landing-btn signup-btn"
            onClick={() => navigate('/register')}
          >
            Sign Up
          </button>
          <button 
            className="landing-btn signin-btn"
            onClick={() => navigate('/login')}
          >
            Sign In
          </button>
        </div>
      </div>
      
      <div className="landing-footer">
        <p className="copyright">@2025 HCI all right reserved</p>
      </div>
    </div>
  );
}

export default LandingPage;
