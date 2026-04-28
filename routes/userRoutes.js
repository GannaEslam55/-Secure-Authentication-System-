const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/authorizeRoles");

router.get("/dashboard", verifyToken, (req, res) => {
  res.json({
    message: "Welcome to Dashboard 🎉",
    user: req.user
  });
});

router.get(
  "/profile",
  verifyToken,
  authorizeRoles("User", "Admin", "Manager"),
  (req, res) => {
    res.json({
      message: "User Profile 👤",
      user: req.user
    });
  }
);

module.exports = router;