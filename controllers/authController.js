const QRCode = require("qrcode");
const speakeasy = require("speakeasy");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const secret = speakeasy.generateSecret({
      name: `SecureAuth (${email})`
    });

    const qrCodeImage = await QRCode.toDataURL(secret.otpauth_url);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      twoFA_secret: secret.base32
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      userId: newUser._id,
      qrCode: qrCodeImage
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LOGIN - returns userId only, token comes after 2FA
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.json({
      message: "Password correct. Please enter your 2FA code.",
      userId: user._id
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// VERIFY 2FA - generates token only after 2FA passes
const verify2FA = async (req, res) => {
  try {
    const { userId, token } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const verified = speakeasy.totp.verify({
      secret: user.twoFA_secret,
      encoding: "base32",
      token: token,
      window: 1
    });

    if (!verified) {
      return res.status(400).json({ message: "Invalid 2FA code" });
    }

    const jwtToken = jwt.sign(
     { userId: user._id, role: user.role, name: user.name },
     process.env.JWT_SECRET,
     { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token: jwtToken
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { register, login, verify2FA };
