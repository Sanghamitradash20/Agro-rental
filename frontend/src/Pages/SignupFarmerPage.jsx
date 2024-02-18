import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  Center,
  ChakraProvider,
  Text,
} from '@chakra-ui/react';

// Import your image
import backgroundImage from '../images/agbg4.png';

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
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Your form submission logic here
    } catch (error) {
      console.error('Error signing up:', error);
      setMessage('Error signing up. Please try again.');
    }
  };

  return (
    <ChakraProvider>
      <Box
        minH="100vh"
        backgroundImage={`url(${backgroundImage})`} // Use template literal to embed image variable
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="linear(to-b, #D4E7C5,#BFD8AF,#99BC85)"
          opacity="0.75" // Adjust the opacity for the desired blur effect
        />
        <Center minH="65vh">
          <Box
            p="30"
            w="100%"
            maxW="400px"
            borderRadius={50}
            boxShadow="0 0 20px darkgray, 0 0 20px black"
            position="relative"
            zIndex="1"
          >
            <Heading textAlign="center" fontSize="3xl" mb="6">
              Farmer Signup
            </Heading>
            <form onSubmit={handleSubmit} style={{ fontSize: '18px', fontFamily: 'Arial' }}>
              <FormControl sx={{ marginBottom: '20px' }}>
                <FormLabel htmlFor="name">Name:</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  bg="white"
                  color="black"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ marginBottom: '20px' }}>
                <FormLabel htmlFor="mobileNumber">Mobile Number:</FormLabel>
                <Input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  bg="white"
                  color="black"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ marginBottom: '20px' }}>
                <FormLabel htmlFor="address">Address:</FormLabel>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  bg="white"
                  color="black"
                  value={formData.address}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ marginBottom: '20px' }}>
                <FormLabel htmlFor="nearestPoliceStation">Nearest Police Station:</FormLabel>
                <Input
                  type="text"
                  id="nearestPoliceStation"
                  name="nearestPoliceStation"
                  bg="white"
                  color="black"
                  value={formData.nearestPoliceStation}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ marginBottom: '20px' }}>
                <FormLabel htmlFor="cityVillage">City/Village:</FormLabel>
                <Input
                  type="text"
                  id="cityVillage"
                  name="cityVillage"
                  bg="white"
                  color="black"
                  value={formData.cityVillage}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ marginBottom: '20px' }}>
                <FormLabel htmlFor="pincode">Pincode:</FormLabel>
                <Input
                  type="text"
                  id="pincode"
                  name="pincode"
                  bg="white"
                  color="black"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ marginBottom: '20px' }}>
                <FormLabel htmlFor="pin">PIN (4 digits):</FormLabel>
                <Input
                  type="password"
                  id="pin"
                  name="pin"
                  bg="white"
                  color="black"
                  value={formData.pin}
                  onChange={handleChange}
                />
              </FormControl>
              <Button bgGradient="linear(yellow.200, green.300, green.400)" type="submit"position="absolute" right="40%" >
                Signup
              </Button>
            </form><br />
            <Text textAlign="center" mt="4">
              Already have an account?<Link to="/login" style={{ color: 'blue' }}>Login here</Link>
            </Text>
            {message && <p>{message}</p>}
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default SignupFarmerPage;
