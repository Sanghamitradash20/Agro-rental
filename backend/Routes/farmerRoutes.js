// routes/farmerRoutes.js
const express = require('express');
const router = express.Router();
const farmerController = require('../Controllers/farmerController');

// Signup route for farmers
router.post('/signup', farmerController.signup);
router.post('/login', farmerController.login);
router.post('/forgot-pin', farmerController.forgotPIN);


module.exports = router;
