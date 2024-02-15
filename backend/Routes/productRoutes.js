const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');

// Route to create a new product
router.post('/', productController.createProduct);

// Route to edit product details
router.put('/:id', productController.editProduct);

// Route to delete a product
router.delete('/:id', productController.deleteProduct);
//Route to getVendorProduct
router.get('/:vendorId', productController.getVendorProducts);

module.exports = router;
