const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "manager", "user"],
    default: "user"
  },
  twoFA_secret: {
    type: String
  }
});

module.exports = mongoose.model("User", userSchema);
console.log("USER MODEL FILE LOADED");