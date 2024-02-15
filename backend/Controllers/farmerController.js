// controllers/farmerController.js
const Farmer = require('../Models/Farmer');
const Vendor =require('../Models/Vendor');

const farmerController = {
  signup: async (req, res) => {
    try {
      const { name, mobileNumber, address, nearestPoliceStation, cityVillage, pincode,pin } = req.body;
      
      // Check if the mobile number is already registered
      const existingFarmer = await Farmer.findOne({ mobileNumber });
      if (existingFarmer) {
        return res.status(400).json({ message: 'Mobile number already exists' });
      }

      // Create a new farmer object
      const newFarmer = new Farmer({
        name,
        mobileNumber,
        address,
        nearestPoliceStation,
        cityVillage,
        pincode,
        pin
      });

      // Save the farmer to the database
      await newFarmer.save();
      
      res.status(201).json({ message: 'Farmer signed up successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  login: async (req, res) => {
    try {
      const { mobileNumber, pin } = req.body;
      
      // Find the farmer by mobile number
      const farmer = await Farmer.findOne({ mobileNumber });
      if (!farmer) {
        return res.status(404).json({ message: 'Farmer not found' });
      }

      // Check if the provided PIN matches the farmer's PIN
      if (farmer.pin !== pin) {
        return res.status(401).json({ message: 'Invalid PIN' });
      }

      // If everything is correct, send a success message
      res.status(200).json({ message: 'Login successful', farmer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  forgotPIN: async (req, res) => {
    try {
      const { mobileNumber } = req.body;

      // Find the farmer by mobile number
      const farmer = await Farmer.findOne({ mobileNumber });
      if (!farmer) {
        return res.status(404).json({ message: 'Farmer not found' });
      }

      // Generate a new PIN (you can implement your logic here)
      const newPIN = generateNewPIN();

      // Update the farmer's PIN in the database
      farmer.pin = newPIN;
      await farmer.save();

      // Send the new PIN to the farmer's mobile number (you can implement your logic here)

      res.status(200).json({ message: 'New PIN sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  details: async (req, res) => {
    try {
      const { vendorID } = req.params;
      const details = await Vendor.findOne({ _id: vendorID }); 
      if (details) {
        res.status(200).json({ details });
      } else {
        res.status(404).json({ msg: 'Details not found' });
      }
    } catch (error) {
      console.error('Error fetching details:', error.message);
      res.status(500).json({ msg: 'Internal server error' });
    }
  }
  
  
};

module.exports = farmerController;
