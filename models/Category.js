const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('category', CategorySchema);
