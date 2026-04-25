const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: {
        type: String,
        enum: ["Admin", "Manager", "User"]
    },
    twoFASecret: String
=======
  name:        { type: String, required: true },
  email:       { type: String, unique: true, required: true },
  password:    { type: String, required: true },
  role:        { type: String, enum: ["Admin", "Manager", "User"], required: true },
  twoFASecret: { type: String, required: true }
>>>>>>> b059437 (gui + editing some problems)
});

module.exports = mongoose.model("User", userSchema);
