const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB数据已连接🔗');
  } catch (err) {
    console.error(err.message);
    process.exit();
  }
};

module.exports = connectDB;
