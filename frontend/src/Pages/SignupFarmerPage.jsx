import React, { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  useMediaQuery,
  Heading,
  Center
} from '@chakra-ui/react';

const SignupFarmerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    address: '',
    nearestPoliceStation: '',
    cityVillage: '',
    pincode: '',
    pin: ''
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
      await axios.post('http://localhost:5000/api/farmers/signup', formData);
      alert('Signup successful!');
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up. Please try again later.');
    }
  };

  return (
    <Box minH="100vh" size='lg'>
      <Center minH="100vh">
        <Box p="30" bgGradient="linear(green.500, blue.300, green.800)" w={isMobile ? "80%" : (isLargerThan768 ? "50%" : "100%")}
          borderRadius={20}
          boxShadow="0 0 20px darkgray, 0 0 20px black"
        >
          <Heading textAlign="center" fontSize="6xl">Farmer Signup</Heading>
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
            <Button colorScheme="blue" type="submit" w="full">Signup</Button>
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default SignupFarmerPage;
