// SignupFarmerPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupFarmerPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    address: '',
    nearestPoliceStation: '',
    cityVillage: '',
    pincode: '',
    pin: '' 
  });

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
      await axios.post('http://localhost:5000/api/farmers/signup', formData);
      alert('Signup successful!');
      navigate('/products');
      
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up. Please try again later.');
    }
    
  };

  return (
    <div>
      <h2>Farmer Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mobile Number:
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nearest Police Station:
          <input
            type="text"
            name="nearestPoliceStation"
            value={formData.nearestPoliceStation}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City/Village:
          <input
            type="text"
            name="cityVillage"
            value={formData.cityVillage}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Pincode:
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          PIN (4 digits):
          <input
            type="text"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupFarmerPage;