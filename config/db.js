const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");

    await mongoose.connect("mongodb://127.0.0.1:27017/auth_system");

    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.log("❌ DB error:", err.message);
  }
};

module.exports = connectDB;