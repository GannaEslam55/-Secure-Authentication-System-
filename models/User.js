const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: {
        type: String,
        enum: ["Admin", "Manager", "User"]
    },
    twoFASecret: String
});

module.exports = mongoose.model("User", userSchema);
