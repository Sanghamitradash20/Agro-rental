const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1 // Ensure that the default quantity is 1
  }
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer' 
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
