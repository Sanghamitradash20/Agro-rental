import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Box,
  useMediaQuery,
  Heading,
  ChakraProvider
} from '@chakra-ui/react';
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
      console.log(response.data.id);
      console.log(response.data);
      if (response.data.msg === "true") {
        const vendorId = response.data.id;
        console.log(response.data.id);
        navigate(`/vendor/dashboard/${vendorId}`);

      } else if(response.data.msg === "falseO") {
        console.log('Signup not successful, OTP is incorrect');
      } else if(response.data.msg === "falseM") {
        console.log('Signup not successful, mobile number is incorrect');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <ChakraProvider>
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
        <p>Signup<Link to="/signup/vendor">Click here</Link></p>
      </Box>
    </Center>
  </Box>
  </ChakraProvider>
);
};

export default VendorLoginPage;
