const Product = require('../Models/Product');
const url = require('url');

const createProduct = async (req, res) => {
  const {
    vendorId,
    imageUrl,
    type,
    brand,
    model,
    description,
    price,
    quantity
  } = req.body;

  try {
    const product = new Product({
      vendorId,
      imageUrl,
      type,
      brand,
      model,
      description,
      price,
      quantity
    });

    await product.save();

    res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

const editProduct = async (req, res) => {
  const productId = req.params.id;
  const updates = req.body;

  try {
    const product = await Product.findByIdAndUpdate(productId, updates, {
      new: true, // Return the modified document rather than the original
      runValidators: true // Run model validation before updating
    });

    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, error: error.message });
  }
  
};

// Controller function to delete a product
const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

  // Controller function to get all products of a particular vendor
const getVendorProducts = async (req, res) => {
    const vendorId = req.params.vendorId; // Assuming the vendor ID is passed as a parameter
  
    try {
      // Find all products where vendorId matches the provided vendor ID
      const products = await Product.find({ vendorId });
  
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      console.error('Error fetching vendor products:', error);
      res.status(500).json({ success: false, error: 'Server error' });
    }
  };


module.exports = {
  createProduct,
  editProduct,
  deleteProduct,
  getVendorProducts
};
