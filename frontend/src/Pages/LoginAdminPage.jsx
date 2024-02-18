import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Center,
  Heading,
  Text,
} from '@chakra-ui/react';

// Import your image
import backgroundImage from '../images/agbg4.png';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
      const response = await axios.post('/api/admin/login', formData);
      setMessage(response.data.message);
      // You can redirect the user or perform any other action based on the response
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in. Please try again.');
    }
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-b, #D4E7C5,#BFD8AF,#99BC85)"
      backgroundImage={`url(${backgroundImage})`}
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
            Admin Login
          </Heading>
          <form onSubmit={handleSubmit} style={{ fontSize: '18px', fontFamily: 'Arial' }}>
            <FormControl sx={{ marginBottom: '20px' }}>
              <FormLabel htmlFor="username">Username:</FormLabel>
              <Input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                bg="white"
                color="black"
              />
            </FormControl>
            <FormControl sx={{ marginBottom: '20px' }}>
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                bg="white"
                color="black"
              />
            </FormControl>
            <Button bgGradient="linear(yellow.200, green.300, green.400)" type="submit" position="absolute" right="40%">
              Login
            </Button>
          </form><br />
          <Text textAlign="center" mt="4">
            Forgot your password?<Link to="/forgot-password" style={{ color: 'blue' }}>Click here</Link> to reset it.
          </Text>
          {message && <p>{message}</p>}
        </Box>
      </Center>
    </Box>
  );
};

export default AdminLogin;
