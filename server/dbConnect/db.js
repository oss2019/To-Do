const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log('database connected');
  } catch (err) {
    console.log(err);
  }
};
module.exports = dbConnect;
