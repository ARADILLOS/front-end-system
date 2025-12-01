import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add forgot password logic here
    console.log('Password reset requested for:', email);
    setSubmitted(true);
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-left">
        <div className="forgot-password-left-content">
          <h2>Discover</h2>
          <h1>CORDOVA'S<br />LOCAL TREASURE</h1>
        </div>
      </div>
      <div className="forgot-password-right">
        <div className="forgot-password-header">
          <img src="/logo.png" alt="Logo" className="logo-small" />
          <h3>LOCAFY</h3>
        </div>
        <div className="forgot-password-form-container">
          <button className="back-button" onClick={handleBack}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          {!submitted ? (
            <>
              <h2>FORGOT PASSWORD</h2>
              <p className="subtitle">Enter your email to reset your password</p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <button type="submit" className="reset-btn">
                  Reset Password
                </button>
              </form>
              
              <p className="back-to-login">
                Remember your password? <Link to="/login">Log in</Link>
              </p>
            </>
          ) : (
            <div className="success-message">
              <h2>Check Your Email</h2>
              <p>We've sent a password reset link to {email}</p>
              <Link to="/login" className="back-btn">
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
