import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const VendorLoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: '',
    password: ''
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
      const response = await axios.post('http://localhost:5000/api/vendors/login', {
        mobileNumber: formData.mobileNumber,
        password: formData.password
      }); if (response.data.bool === "true") {
        const vendorId = response.data.token;
        navigate(`vendor/dashboard/:vendorID?id=${vendorId}`);

      } else if(response.data.bool === "falseO") {
        console.log('Signup not successful, OTP is incorrect');
      } else if(response.data.bool === "falseM") {
        console.log('Signup not successful, mobile number is incorrect');
      }
    } catch (error) {
      console.error('Error logging in:', error);
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
      <p>Signup<Link to="/signup/vendor">Click here</Link></p>
    </div>
  );
};

export default VendorLoginPage;
