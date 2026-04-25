const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://farahnegm90_db_user:PqKSFgGJgxkXzSSU@cluster0.omn7g5s.mongodb.net/auth_system?retryWrites=true&w=majority");
    console.log("MongoDB Atlas connected");
  } catch (err) {
    console.log("DB error:", err);
  }
};

module.exports = connectDB;