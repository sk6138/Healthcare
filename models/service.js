const mongoose = require('mongoose');

// Define Service Schema
const ServiceSchema = new mongoose.Schema({
    
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Service', ServiceSchema);
