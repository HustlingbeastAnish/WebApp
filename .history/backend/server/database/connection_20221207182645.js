const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
};
