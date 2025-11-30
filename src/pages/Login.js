import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Login attempt:', { email, password, role });
    
    // Navigate based on role
    if (role === 'business-owner') {
      navigate('/business-owner-dashboard');
    } else {
      navigate('/home');
    }
  };

  const handleGoogleLogin = () => {
    // Add Google OAuth logic here
    console.log('Google login clicked');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-left-content">
          <h2>Discover</h2>
          <h1>CORDOVA'S<br />LOCAL TREASURE</h1>
        </div>
      </div>
      <div className="login-right">
        <div className="login-header">
          <img src="logo.jpg" alt="Logo" className="logo-small" />
          <h3>LOCAFY</h3>
        </div>
        <div className="login-form-container">
          <button className="back-button" onClick={handleBack}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          <h2>WELCOME!</h2>
          <p className="subtitle">sign in to LOCAFY</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="role-select"
                required
              >
                <option value="user">User</option>
                <option value="business-owner">Business Owner</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
            
            <div className="divider">
              <span>or</span>
            </div>
            
            <button type="button" className="google-btn" onClick={handleGoogleLogin}>
              <span className="google-icon">G</span>
              Login with Google
            </button>
            
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          
          <p className="register-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
