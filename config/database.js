const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;