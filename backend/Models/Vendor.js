// // models/Vendor.js
// const mongoose = require('mongoose');

// const vendorSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   mobileNumber: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   address: {
//     type: String,
//     required: true
//   },
//   nearestPoliceStation: {
//     type: String,
//     required: true
//   },
//   cityVillage: {
//     type: String,
//     required: true
//   },
//   pincode: {
//     type: String,
//     required: true
//   }
// });

// const Vendor = mongoose.model('Vendor', vendorSchema);

// module.exports = Vendor;

const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  nearestPoliceStation: {
    type: String,
    required: true
  },
  cityVillage: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  otp: {
    type: String // Assuming the OTP is stored as a string
  }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;

