const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const speakeasy = require("speakeasy");
const QRCode = require("qrcode");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const secret = speakeasy.generateSecret({ length: 20 });

    const user = new User({
        name,
        email,
        password: hashedPassword,
        role,
        twoFASecret: secret.base32
    });

    await user.save();

    const qr = await QRCode.toDataURL(secret.otpauth_url);

    res.json({ message: "User registered", qrCode: qr });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json("Wrong password");

    res.json({ message: "Enter 2FA", userId: user._id });
});

router.post("/verify-2fa", async (req, res) => {
    const { userId, token } = req.body;

    const user = await User.findById(userId);

    const verified = speakeasy.totp.verify({
        secret: user.twoFASecret,
        encoding: "base32",
        token: token
    });

    if (!verified) return res.status(400).json("Invalid 2FA");

    const jwtToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ message: "Login success", token: jwtToken });
});

module.exports = router;
