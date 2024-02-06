// routes/vendorRoutes.js
const express = require('express');
const router = express.Router();
const vendorController = require('../Controllers/vendorController');

// Signup route for vendors
router.post('/signup', vendorController.signup);
router.post('/login', vendorController.login);
router.post('/verify-otp', vendorController.verifyOTP);



module.exports = router;
