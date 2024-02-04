// VendorLoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VendorLoginPage = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/vendors/login', formData);
      setMessage(response.data.message);
      // You can redirect the user or perform any other action based on the response
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Vendor Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <p>Signup<Link to="/signup/vendor">Click here</Link></p>
    </div>
  );
};

export default VendorLoginPage;
