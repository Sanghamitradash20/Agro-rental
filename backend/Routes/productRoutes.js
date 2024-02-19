const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');


router.post('/', productController.createProduct); // Update the route to '/'
router.put('/:id', productController.editProduct);
router.delete('/:id', productController.deleteProduct);
router.get('/:vendorId', productController.getVendorProducts);

module.exports = router;
