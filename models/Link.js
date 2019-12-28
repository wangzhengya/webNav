const mongoose = require('mongoose');

const LinkSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  url: {
    type: String,
    required: true
  },
  icon_url: {
    type: String
  },
  views: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    default: '简单'
  },
  style: {
    type: String
  },
  category: {
    type: String,
    default: '其他'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('link', LinkSchema);
