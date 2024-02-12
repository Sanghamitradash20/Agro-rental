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

const VendorLoginPage = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    password: ''
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
      const response = await axios.post('http://localhost:5000/api/vendors/login', formData);
      setMessage(response.data.message);
      // You can redirect the user or perform any other action based on the response
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in. Please try again later.');
    }
  };

  return (
    <Box minH="100vh" bgGradient="linear(green.500, blue.300, green.800)">
      <Center minH="65vh">
        <Box p="30" bgGradient="linear(green.500, blue.300, green.800)" w={isMobile ? "80%" : (isLargerThan768 ? "50%" : "100%")}
          borderRadius={20}
          boxShadow="0 0 20px darkgray, 0 0 20px black"
        >
          <Heading textAlign="center" fontSize="6xl">Vendor Login</Heading>
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
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button colorScheme="blue" type="submit" w="full">Login</Button>
          </form>
          {message && <p>{message}</p>}
          <p>Signup<Link to="/signup/vendor">Click here</Link></p>
        </Box>
      </Center>
    </Box>
  );
};

export default VendorLoginPage;
