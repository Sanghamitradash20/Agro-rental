import React, { useState } from 'react';
import axios from 'axios';
import { Form, Link, useNavigate } from 'react-router-dom';
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

const FarmerLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: '',
    pin: '',
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
      const response = await axios.post('http://localhost:5000/api/farmers/login', formData);
      setMessage(response.data.message);
      navigate('/farmer/products');
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in. Please try again.');
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
              Farmer Login
            </Heading>
            <form onSubmit={handleSubmit} style={{ fontSize: '18px', fontFamily: 'Arial' }}>
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
                <FormLabel htmlFor="pin">PIN:</FormLabel>
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
                Login
              </Button>
            </form><br />
            <Text textAlign="center" mt="4">
              Forgot your PIN?<Link to="/forgot-pin" style={{ color: 'blue' }}>Click here</Link> to reset it.
            </Text>
            {message && <p>{message}</p>}
            <Text textAlign="center" mt="4">
              Signup.<Link to="/signup/farmer" style={{ color: 'blue' }}>Click here</Link>
            </Text>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default FarmerLogin;
