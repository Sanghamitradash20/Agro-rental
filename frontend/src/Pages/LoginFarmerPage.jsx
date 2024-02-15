import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FormControl, FormLabel, Input, Button, Box, Heading, Center } from '@chakra-ui/react';

const FarmerLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: '',
    pin: ''
  });
  const [message, setMessage] = useState('');

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
      const response = await axios.post('http://localhost:5000/api/farmers/login', formData);
      setMessage(response.data.message);
      navigate('/products');
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in. Please try again.');
    }
  };

  return (
    <Box minH="100vh" bgGradient="linear(#D4E7C5,#BFD8AF,#99BC85)">
      <Center minH="65vh">
        <Box p="30" bgGradient="linear(#D4E7C5,#BFD8AF,#99BC85)" w="100%" maxW="400px" borderRadius={20} boxShadow="0 0 20px darkgray, 0 0 20px black">
          <Heading textAlign="center" fontSize="6xl" mb="6">Farmer Login</Heading>
          <form onSubmit={handleSubmit} style={{ fontSize: '18px', fontFamily: 'Arial' }}>
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
              <FormLabel htmlFor="pin">PIN:</FormLabel>
              <Input
                type="password"
                id="pin"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
              />
            </FormControl>
            <Button colorScheme="blue" type="submit" w="full">Login</Button>
          </form>
          <p textAlign="center" mt="4">Forgot your PIN? <Link to="/forgot-pin">Click here</Link> to reset it.</p>
          {message && <p>{message}</p>}
          <p textAlign="center" mt="4">Signup<Link to="/signup/farmer">Click here</Link></p>
        </Box>
      </Center>
    </Box>
  );
};

export default FarmerLogin;
