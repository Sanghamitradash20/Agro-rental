import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Box,
  useMediaQuery,
  Heading,
} from '@chakra-ui/react';

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
  const [isMobile] = useMediaQuery("(max-width: 320px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

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
    <Box minH="100vh" bgGradient="linear(green.500, blue.300, green.800)">
      <Center minH="100vh">
        <Box p="30" bgGradient="linear(green.500, blue.300, green.800)" w={isMobile ? "80%" : (isLargerThan768 ? "50%" : "100%")}
          borderRadius={20}
          boxShadow="0 0 20px darkgray, 0 0 20px black"
        >
          <Heading textAlign="center" fontSize="6xl">Vendor Signup</Heading>
          <form onSubmit={handleSubmit} style={{ fontSize: '18px', fontFamily: 'Arial' }}>
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
              <FormLabel htmlFor="nearestPoliceStation">Nearest Police Station:</FormLabel>
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
            <Button colorScheme="blue" type="submit" w="full">Signup</Button>
          </form>
          {message && <p>{message}</p>}
        </Box>
      </Center>
    </Box>
  );
};

export default SignupVendorPage;
