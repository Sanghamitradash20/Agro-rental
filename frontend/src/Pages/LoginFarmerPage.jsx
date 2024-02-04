// FarmerLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom'; // Import Link for React Router navigation

const FarmerLogin = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    mobileNumber: '',
    pin: ''
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
      const response = await axios.post('http://localhost:5000/api/farmers/login', formData);
      setMessage(response.data.message);
      navigate('/products');

      // You can redirect the user or perform any other action based on the response
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in. Please try again.');
    }
  };

  return (
    <div>
      <h2>Farmer Login</h2>
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
          <label htmlFor="pin">PIN:</label>
          <input
            type="password"
            id="pin"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Forgot your PIN? <Link to="/forgot-pin">Click here</Link> to reset it.</p>
      {message && <p>{message}</p>}
      <p>Signup<Link to="/signup/farmer">Click here</Link></p>
    </div>
  );
};

export default FarmerLogin;
