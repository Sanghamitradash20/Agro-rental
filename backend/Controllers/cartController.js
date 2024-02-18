const Cart = require('../Models/Cart');

// Controller to add a product to the cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id; // Assuming you have user authentication middleware

    // Check if the product already exists in the user's cart
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      // If cart doesn't exist, create a new one
      cart = new Cart({ user: userId, items: [] });
    }

    // Check if the product is already in the cart
    const existingItem = cart.items.find(item => item.product.toString() === productId);
    if (existingItem) {
      return res.status(400).json({ message: 'Product already exists in the cart' });
    } else {
      // If the product is not in the cart, add it
      cart.items.push({ product: productId, quantity: parseInt(quantity) });
    }

    // Save the updated cart
    await cart.save();

    res.status(201).json({ message: 'Product added to cart successfully', cart });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get the user's cart
const getUserCart = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have user authentication middleware
    const cart = await Cart.findOne({ user: userId }).populate('items.product');

    res.status(200).json({ cart });
  } catch (error) {
    console.error('Error fetching user cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to remove a product from the cart
const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user._id; // Assuming you have user authentication middleware

    // Find the user's cart
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Remove the product from the cart
    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    await cart.save();

    res.status(200).json({ message: 'Product removed from cart successfully', cart });
  } catch (error) {
    console.error('Error removing product from cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to clear the user's cart
const clearCart = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have user authentication middleware

    // Find the user's cart and clear it
    await Cart.findOneAndUpdate({ user: userId }, { items: [] });

    res.status(200).json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  addToCart,
  getUserCart,
  removeFromCart,
  clearCart
};
