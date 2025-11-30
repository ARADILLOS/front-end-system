import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Register attempt:', { name, role, email, password });
    // Navigate to login page after successful registration
    navigate('/login');
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setShowRoleDropdown(false);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="register-left-content">
          <h2>Discover</h2>
          <h1>CORDOVA'S<br />LOCAL TREASURE</h1>
        </div>
      </div>
      <div className="register-right">
        <div className="register-header">
          <img src="logo.jpg" alt="Logo" className="logo-small" />
          <h3>LOCAFY</h3>
        </div>
        <div className="register-form-container">
          <button className="back-button" onClick={handleBack}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          <h2>WELCOME!</h2>
          <p className="subtitle">register to LOCAFY</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <div className="custom-select">
                <div 
                  className="select-header"
                  onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                >
                  <span className={role ? 'selected' : 'placeholder'}>
                    {role || '--Select Role --'}
                  </span>
                  <span className="arrow">▼</span>
                </div>
                {showRoleDropdown && (
                  <div className="select-options">
                    <div 
                      className="select-option"
                      onClick={() => handleRoleSelect('User')}
                    >
                      User
                    </div>
                    <div 
                      className="select-option"
                      onClick={() => handleRoleSelect('Business Owner')}
                    >
                      Business Owner
                    </div>
                  </div>
                )}
              </div>
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
            
            <button type="submit" className="register-btn">
              Register
            </button>
          </form>
          
          <p className="login-link">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
