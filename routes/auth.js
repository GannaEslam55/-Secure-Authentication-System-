<<<<<<< HEAD
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
=======
const express  = require("express");
const router   = express.Router();
const User     = require("../models/User");
const bcrypt   = require("bcrypt");
const speakeasy = require("speakeasy");
const QRCode   = require("qrcode");
const jwt      = require("jsonwebtoken");

// POST /auth/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const secret = speakeasy.generateSecret({
      length: 20,
      name: `SecureApp (${email})`
    });

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      twoFASecret: secret.base32
>>>>>>> b059437 (gui + editing some problems)
    });

    await user.save();

<<<<<<< HEAD
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
=======
    const qrCode = await QRCode.toDataURL(secret.otpauth_url);

    res.status(201).json({ message: "User registered successfully", qrCode });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
});

// POST /auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password" });

    res.json({ message: "Password correct. Enter your 2FA code.", userId: user._id });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

// POST /auth/verify-2fa
router.post("/verify-2fa", async (req, res) => {
  try {
    const { userId, token } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ message: "User not found" });

    const verified = speakeasy.totp.verify({
      secret:   user.twoFASecret,
      encoding: "base32",
      token:    token,
      window:   1
    });

    if (!verified) return res.status(400).json({ message: "Invalid 2FA code" });

    const jwtToken = jwt.sign(
      { id: user._id, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token: jwtToken });
  } catch (err) {
    res.status(500).json({ message: "2FA verification failed", error: err.message });
  }
>>>>>>> b059437 (gui + editing some problems)
});

module.exports = router;
