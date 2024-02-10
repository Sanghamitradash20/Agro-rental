const express = require('express');
const router = express.Router();
const vendorController = require('../Controllers/vendorController');

// Signup route for vendors
router.post('/signup', vendorController.signup);
router.post('/verify-otp', vendorController.verifyOTP);
router.get('/:vendorID', vendorController.getVendorByVendorID);
router.put('/:vendorID', vendorController.updateVendorDetailsByVendorID);

router.post('/login',vendorController.login)


module.exports = router;
