import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Box,
  useMediaQuery,
  Heading,Text,
  ChakraProvider
} from '@chakra-ui/react';
import backgroundImage from '../images/agbg4.png'; // Import your image

const VendorLoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: '',
    password: ''
  });
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
      const response = await axios.post('http://localhost:5000/api/vendors/login', {
        mobileNumber: formData.mobileNumber,
        password: formData.password
      }); 
      if (response.data.msg === "true") {
        const vendorId = response.data.id;
        navigate(`/vendor/dashboard/${vendorId}`);
      } else if(response.data.msg === "falseO") {
        console.log('Login not successful, OTP is incorrect');
      } else if(response.data.msg === "falseM") {
        console.log('Login not successful, mobile number is incorrect');
      }
    } catch (error) {
      console.error('Error logging in:', error);
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
              Vendor Login
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
                <FormLabel htmlFor="password">Password:</FormLabel>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  bg="white"
                  color="black"
                  value={formData.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Button colorScheme="blue" type="submit" w="full">Login</Button>
            </form>
            <Text textAlign="center" mt="4">
              Don't have an account? <Link to="/signup/vendor" style={{ color: 'blue' }}>Signup here</Link>
            </Text>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default VendorLoginPage;
