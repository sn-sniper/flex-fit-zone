import React, { useState, useContext } from 'react';
import "../Styles/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { RegistrationContext } from '../Context/RegistrationContext'; 

function Register() {
  const { updateData } = useContext(RegistrationContext); 
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      updateData('username', formData.username);
      updateData('email', formData.email);
      updateData('password', formData.password);
      navigate('/plans', { replace: true });
    } catch (error) {
      console.error('Error during registration process:', error.message);
    }
  };

  return (
    <div className="Login-Container">
      <div className="form-container">
        <p className="title">Create account</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Name"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <ion-icon name="eye-off-outline"></ion-icon>
          </div>
          <button className="form-btn">Register</button>
        </form>
        <p className="sign-up-label">
          Already have an account? <Link to="/login" className="sign-up-link">Log in</Link>
        </p>
        <div className="buttons-container">
          <div className="apple-login-button">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="apple-icon" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="..."></path>
            </svg>
            <span>Sign up with Apple</span>
          </div>
          <div className="google-login-button">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="..."></path>
            </svg>
            <span>Sign up with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
