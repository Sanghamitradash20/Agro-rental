// SignupVendorPage.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupVendorPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    address: '',
    nearestPoliceStation: '',
    cityVillage: '',
    pincode: ''
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
      const response = await axios.post('http://localhost:5000/api/vendors/signup', formData);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error signing up:', error);
      setMessage('Error signing up. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Vendor Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
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
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nearestPoliceStation">Nearest Police Station:</label>
          <input
            type="text"
            id="nearestPoliceStation"
            name="nearestPoliceStation"
            value={formData.nearestPoliceStation}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cityVillage">City/Village:</label>
          <input
            type="text"
            id="cityVillage"
            name="cityVillage"
            value={formData.cityVillage}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignupVendorPage;
