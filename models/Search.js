const mongoose = require('mongoose');

const SearchSchema = mongoose.Schema({
  user: {
    type: String,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('search', SearchSchema);
