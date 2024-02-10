// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignupFarmerPage = () => {
//   const navigate = useNavigate();

//   // State variables for form data and OTP
//   const [formData, setFormData] = useState({
//     name: '',
//     mobileNumber: '',
//     address: '',
//     nearestPoliceStation: '',
//     cityVillage: '',
//     pincode: '',
//     pin: ''
//   });

//   const [otpData, setOtpData] = useState({
//     otp: '',
//     showMessage: false,
//     message: ''
//   });

//   const [isSendingOTP, setIsSendingOTP] = useState(false);
//   const [timer, setTimer] = useState(0);

//   // Countdown timer effect
//   useEffect(() => {
//     let interval;
//     if (timer > 0) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [timer]);

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isFormFilled()) {
//       alert('Please fill in all the fields.');
//       return;
//     }
//     setIsSendingOTP(true);
//     try {
//       // Send form data to backend to initiate OTP generation
//       const response = await axios.post('http://localhost:5000/api/farmers/signup', formData);
//       setOtpData({
//         ...otpData,
//         showMessage: true,
//         message: response.data.msg
//       });
//       setTimer(30);
//     } catch (error) {
//       console.error('Error signing up:', error.message);
//       setOtpData({
//         ...otpData,
//         message: 'Error signing up. Please try again later.'
//       });
//     } finally {
//       setIsSendingOTP(false);
//     }
//   };

//   // Function to handle OTP submission
//   const handleOTPSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send OTP data to backend for verification
//       const response = await axios.post('http://localhost:5000/api/farmers/verify-otp', {
//         ...formData,
//         otp: otpData.otp
//       });
//       if (response.data.bool === 'true') {
//         alert('Signup successful!');
//         navigate('/products');
//       } else if (response.data.bool === 'falseO') {
//         console.log('Signup not successful, OTP is incorrect');
//       } else if (response.data.bool === 'falseM') {
//         console.log('Signup not successful, mobile number is incorrect');
//       }
//     } catch (error) {
//       console.error('Error verifying OTP:', otpData.otp, error.message);
//       setOtpData({
//         ...otpData,
//         message: 'Invalid OTP. Please try again.'
//       });
//     }
//   };

//   // Function to check if all form fields are filled
//   const isFormFilled = () => {
//     for (const key in formData) {
//       if (formData[key].trim() === '') {
//         return false;
//       }
//     }
//     return true;
//   };

//   // Function to handle changes in form fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   return (
//     <div>
//       <h2>Farmer Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//       <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Mobile Number:
//           <input
//             type="text"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Address:
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Nearest Police Station:
//           <input
//             type="text"
//             name="nearestPoliceStation"
//             value={formData.nearestPoliceStation}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           City/Village:
//           <input
//             type="text"
//             name="cityVillage"
//             value={formData.cityVillage}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Pincode:
//           <input
//             type="text"
//             name="pincode"
//             value={formData.pincode}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           PIN (4 digits):
//           <input
//             type="text"
//             name="pin"
//             value={formData.pin}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit" disabled={isSendingOTP || timer > 0}>
//           {isSendingOTP ? 'Sending OTP...' : timer > 0 ? `Resend OTP in ${timer}s` : 'Send OTP'}
//         </button>
//       </form>
//       {otpData.showMessage && (
//         <div>
//           <p>{otpData.message}</p>
//           <form onSubmit={handleOTPSubmit}>
//             <input
//               type="number"
//               name="otp"
//               value={otpData.otp}
//               onChange={(e) => setOtpData({ ...otpData, otp: e.target.value })}
//               placeholder="Enter OTP"
//             />
//             <button type="submit">Verify OTP</button>

//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignupFarmerPage;