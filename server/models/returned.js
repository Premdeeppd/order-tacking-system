// server/models/returned.js
const mongoose = require('mongoose');
const { string } = require('zod');

const returnedSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  cardid: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  timestamp: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('returned', returnedSchema);