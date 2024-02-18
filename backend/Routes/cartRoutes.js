// cartRoutes.js

const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/cartController');

// Route for adding a product to the cart
router.post('/add', cartController.addToCart);

// Route for getting user's cart
router.get('/', cartController.getUserCart);

// Route for removing a product from the cart
router.delete('/remove/:productId', cartController.removeFromCart);

// Route for clearing the cart
router.delete('/clear', cartController.clearCart);

module.exports = router;
