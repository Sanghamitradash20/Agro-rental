// models/Farmer.js
const mongoose = require('mongoose');


const farmerSchema = new mongoose.Schema({
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
  pin: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 4
}

});

const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;
