const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');


router.post('/', productController.createProduct);
router.put('/:id', productController.editProduct);
router.delete('/:id', productController.deleteProduct);
//Route to getVendorProduct
router.get('/:vendorId', productController.getVendorProducts);

module.exports = router;
