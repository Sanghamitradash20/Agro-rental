import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'; 
const SignupVendorPage = () => {
  // const history = useHistory();
  const [formData, setFormData] = useState({
    Name: '',
    mobileNumber: '',
    address: '',
    nearestPoliceStation: '',
    cityVillage: '',
    pincode: '',
    password: '' 
  });
  const [otpData, setOtpData] = useState({
    otp: '',
    showMessage: false,
    message: ''
  });
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);
  const isFormFilled = () => {
    for (const key in formData) {
      if (formData[key].trim() === '') {
        return false;
      }
    }
    return true;
  };
  const handleSignup = async (event) => {
    event.preventDefault();
    if (!isFormFilled()) {
      alert('Please fill in all the fields.');
      return;
    }
    setIsSendingOTP(true);
    try {
      const response = await axios.post('http://localhost:5000/api/vendors/signup', formData);
      setOtpData({
        ...otpData,
        showMessage: true,
        message: response.data.msg
      });
      setTimer(30); 
    } catch (error) {
      console.error('Error signing up:', error.message);
      setOtpData({
        ...otpData,
        message: 'Error signing up. Please try again later.'
      });
    } finally {
      setIsSendingOTP(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const navigate=useNavigate()
  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/vendors/verify-otp', {
        ...formData,
        otp: otpData.otp
      });
      if (response.data.bool === "true") {
        // history.push('./Productvendorpage', { token: response.data.token });
        const vendorId = response.data.token;
        navigate(`vendor/dashboard/:vendorID?id=${vendorId}`);

      } else if(response.data.bool === "falseO") {
        console.log('Signup not successful, OTP is incorrect');
      } else if(response.data.bool === "falseM") {
        console.log('Signup not successful, mobile number is incorrect');
      }
    } catch (error) {
      console.error('Error verifying OTP:', otpData.otp, error.message);
      setOtpData({
        ...otpData,
        message: 'Invalid OTP. Please try again.'
      });
    }
  };
  return (
    <div>
      <h2>Vendor Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="number"
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
            type="number"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={isSendingOTP || timer > 0}>
          {isSendingOTP ? 'Sending OTP...' : timer > 0 ? `Retry in ${timer}s` : 'Send OTP'}
        </button>
      </form>
      {otpData.showMessage && <p>{otpData.message}</p>}
      {otpData.showMessage && (
        <form onSubmit={handleOTPSubmit}>
          <input
            type="number"
            name="otp"
            value={otpData.otp}
            onChange={(e) => setOtpData({ ...otpData, otp: e.target.value })}
            placeholder="Enter OTP"
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
};
export default SignupVendorPage;