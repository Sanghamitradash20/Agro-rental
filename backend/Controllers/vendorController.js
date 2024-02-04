// controllers/vendorController.js
const Vendor = require('../Models/Vendor');

const vendorController = {
  signup: async (req, res) => {
    try {
      const {
        name,
        mobileNumber,
        address,
        nearestPoliceStation,
        cityVillage,
        pincode
      } = req.body;

      // Check if the mobile number is already registered
      const existingVendor = await Vendor.findOne({ mobileNumber });
      if (existingVendor) {
        return res.status(400).json({ message: 'Mobile number already exists' });
      }

      // Create a new vendor object
      const newVendor = new Vendor({
        name,
        mobileNumber,
        address,
        nearestPoliceStation,
        cityVillage,
        pincode
      });

      // Save the vendor to the database
      await newVendor.save();

      res.status(201).json({ message: 'Vendor signed up successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  login: async (req, res) => {
    try {
      const { mobileNumber, password } = req.body;

      // Find the vendor by mobile number
      const vendor = await Vendor.findOne({ mobileNumber });
      if (!vendor) {
        return res.status(404).json({ message: 'Vendor not found' });
      }

      // Check if the password matches
      if (vendor.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      // If everything is correct, send a success message
      res.status(200).json({ message: 'Login successful', vendor });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = vendorController;
