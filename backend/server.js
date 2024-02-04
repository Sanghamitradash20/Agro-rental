const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const farmerRoutes = require('./Routes/farmerRoutes');
const vendorRoutes = require('./Routes/vedorRoutes');
const adminRoutes = require('./Routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json())
app.use(cors());

app.use(bodyParser.json());

// MongoDB connection setup
mongoose.connect("mongodb://127.0.0.1:27017/agridb")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Routes
app.use('/api/farmers', farmerRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/admin', adminRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
