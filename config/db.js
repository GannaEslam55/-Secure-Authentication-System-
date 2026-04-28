const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/auth_system");
    console.log("MongoDB connected");
  } catch (err) {
    console.log("DB error:", err);
  }
};

module.exports = connectDB;
