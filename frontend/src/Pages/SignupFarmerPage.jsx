import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  useMediaQuery,
  Heading,
  Center,
  Text,
  NumberInput,
  NumberInputField,
  ChakraProvider
} from '@chakra-ui/react';
const SignupFarmerPage = () => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 320px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    address: '',
    nearestPoliceStation: '',
    cityVillage: '',
    pincode: '',
    pin: ''
  });

  const [otpData, setOtpData] = useState({
    otp: '',
    showMessage: false,
    message: ''
  });

  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [timer, setTimer] = useState(0);

  // Countdown timer effect
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormFilled()) {
      alert('Please fill in all the fields.');
      return;
    }
    setIsSendingOTP(true);
    try {
      // Send form data to backend to initiate OTP generation
      const response = await axios.post('http://localhost:5000/api/farmers/signup', formData);
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

  // Function to handle OTP submission
  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send OTP data to backend for verification
      const response = await axios.post('http://localhost:5000/api/farmers/verify-otp', {
        ...formData,
        otp: otpData.otp
      });
      if (response.data.bool === 'true') {
        alert('Signup successful!');
        navigate('/products');
      } else if (response.data.bool === 'falseO') {
        console.log('Signup not successful, OTP is incorrect');
      } else if (response.data.bool === 'falseM') {
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

  // Function to check if all form fields are filled
  const isFormFilled = () => {
    for (const key in formData) {
      if (formData[key].trim() === '') {
        return false;
      }
    }
    return true;
  };

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <ChakraProvider>
    <Box
    minH="100vh"
    size="lg"
    bgGradient="linear(green.500, blue.300, green.800)"
  >
    <Center minH="100vh">
      <Box
        p="30"
        bgGradient="linear(green.500, blue.300, green.800)"
        w={isMobile ? "80%" : isLargerThan768 ? "50%" : "100%"}
        borderRadius={20}
        boxShadow="0 0 20px darkgray, 0 0 20px black"
      >
        <Heading textAlign="center" fontSize="6xl">
          Farmer Signup
        </Heading>
        <form
          onSubmit={handleSubmit}
          style={{ fontSize: "18px", fontFamily: "Arial" }}
        >
          <FormControl sx={{ marginBottom: "20px" }}>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl sx={{ marginBottom: "20px" }}>
            <FormLabel htmlFor="mobileNumber">Mobile Number:</FormLabel>
            <Input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl sx={{ marginBottom: "20px" }}>
            <FormLabel htmlFor="address">Address:</FormLabel>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl sx={{ marginBottom: "20px" }}>
            <FormLabel htmlFor="nearestPoliceStation">
              Nearest Police Station:
            </FormLabel>
            <Input
              type="text"
              id="nearestPoliceStation"
              name="nearestPoliceStation"
              value={formData.nearestPoliceStation}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl sx={{ marginBottom: "20px" }}>
            <FormLabel htmlFor="cityVillage">City/Village:</FormLabel>
            <Input
              type="text"
              id="cityVillage"
              name="cityVillage"
              value={formData.cityVillage}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl sx={{ marginBottom: "20px" }}>
            <FormLabel htmlFor="pincode">Pincode:</FormLabel>
            <Input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl sx={{ marginBottom: "20px" }}>
            <FormLabel htmlFor="pin">PIN (4 digits):</FormLabel>
            <Input
              type="text"
              id="pin"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
            />
          </FormControl>
          {otpData.showMessage && (
            <Box>
              <Text>{otpData.message}</Text>
              <form onSubmit={handleOTPSubmit}>
                <FormControl id="otp" isRequired>
                  <FormLabel>Enter OTP</FormLabel>
                  <NumberInput
                    value={otpData.otp}
                    onChange={(value) =>
                      setOtpData({ ...otpData, otp: value })
                    }
                  >
                    <NumberInputField />
                  </NumberInput>
                </FormControl>
                <Button type="submit" colorScheme="blue" mt={4}>
                  Verify OTP
                </Button>
              </form>
            </Box>
          )}
        </form>
      </Box>
    </Center>
  </Box>
  </ChakraProvider>
);
};
export default SignupFarmerPage;
