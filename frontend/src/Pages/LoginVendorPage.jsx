// // VendorLoginPage.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const VendorLoginPage = () => {
//   const [formData, setFormData] = useState({
//     mobileNumber: '',
//     password: ''
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/vendors/login', formData);
//       setMessage(response.data.message);
//       // You can redirect the user or perform any other action based on the response
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setMessage('Error logging in. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Vendor Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="mobileNumber">Mobile Number:</label>
//           <input
//             type="text"
//             id="mobileNumber"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//       <p>Signup<Link to="/signup/vendor">Click here</Link></p>
//     </div>
//   );
// };

// export default VendorLoginPage;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const VendorLoginPage = () => {
//   const [formData, setFormData] = useState({
//     mobileNumber: '',
//     otp: '' // New field for OTP
//   });
//   const [showOTPField, setShowOTPField] = useState(false); // State to control OTP field visibility
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmitMobileNumber = async (e) => {
//     e.preventDefault();
//     try {
//       // Send a request to the server to generate and send the OTP
//       const response = await axios.post('http://localhost:5000/api/vendors/login', { mobileNumber: formData.mobileNumber });
//       setMessage(response.data.message);
//       // If the request is successful (OTP sent), show the OTP field
//       setShowOTPField(true);
//       setMessage('OTP sent successfully.'); // You can display a message indicating that the OTP has been sent
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//       setMessage('Error sending OTP. Please try again later.');
//     }
//   };
  
//   const handleSubmitOTP = async (e) => {
//     e.preventDefault();
//     try {
//       // Send a request to the server to validate the OTP
//       const response = await axios.post('http://localhost:5000/api/vendors/verify-otp', {
//         mobileNumber: formData.mobileNumber,
//         otp: formData.otp
//       });
//       setMessage(response.data.message);
//       // If the OTP is valid, show a success message
//       setMessage('Login successful!');
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       setMessage('Invalid OTP. Please try again.'); // You can display a message indicating that the OTP is invalid
//     }
//   };
  

//   return (
//     <div>
//       <h2>Vendor Login</h2>
//       <form onSubmit={showOTPField ? handleSubmitOTP : handleSubmitMobileNumber}>
//         <div>
//           <label htmlFor="mobileNumber">Mobile Number:</label>
//           <input
//             type="text"
//             id="mobileNumber"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//           />
//         </div>
//         {/* Render OTP field and button if showOTPField is true */}
//         {showOTPField && (
//           <div>
//             <label htmlFor="otp">OTP:</label>
//             <input
//               type="text"
//               id="otp"
//               name="otp"
//               value={formData.otp}
//               onChange={handleChange}
//             />
//           </div>
//         )}
//         <button type="submit">
//           {showOTPField ? 'Submit OTP' : 'Send OTP'}
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//       <p>Signup<Link to="/signup/vendor">Click here</Link></p>
//     </div>
//   );
// };

// export default VendorLoginPage;

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VendorLoginPage = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    otp: '' // New field for OTP
  });
  const [showOTPField, setShowOTPField] = useState(false); // State to control OTP field visibility
  const [otpGenerated, setOtpGenerated] = useState(false); // State to track if OTP has been generated
  const [otpMessage, setOtpMessage] = useState(''); // State to store OTP message
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmitMobileNumber = async (e) => {
    e.preventDefault();
    try {
      // Send a request to the server to generate and send the OTP
      const response = await axios.post('http://localhost:5000/api/vendors/login', { mobileNumber: formData.mobileNumber });
      setOtpMessage(response.data.message);
      // If the request is successful (OTP sent), show the OTP field
      setShowOTPField(true);
      setOtpGenerated(true);
      setFormData({ ...formData, otp: response.data.otp });
    } catch (error) {
      console.error('Error sending OTP:', error);
      setOtpMessage('Error sending OTP. Please try again later.');
    }
  };
  
  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    try {
      // Send a request to the server to validate the OTP
      const response = await axios.post('http://localhost:5000/api/vendors/verify-otp', {
        mobileNumber: formData.mobileNumber,
        otp: formData.otp
      });
      setOtpMessage(response.data.message);
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setOtpMessage('Invalid OTP. Please try again.'); // You can display a message indicating that the OTP is invalid
    }
  };

  return (
    <div>
      <h2>Vendor Login</h2>
      <form onSubmit={showOTPField ? handleSubmitOTP : handleSubmitMobileNumber}>
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
        {/* Render OTP field and button if showOTPField is true */}
        {showOTPField && (
          <div>
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
            />
          </div>
        )}
        <button type="submit">
          {showOTPField ? 'Submit OTP' : 'Send OTP'}
        </button>
      </form>
      {/* Display OTP message if generated */}
      {otpGenerated && <p>OTP: {otpMessage}</p>}
      <p>Signup<Link to="/signup/vendor">Click here</Link></p>
    </div>
  );
};

export default VendorLoginPage;


