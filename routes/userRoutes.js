const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/authorizeRoles");

router.get("/dashboard", verifyToken, (req, res) => {
  res.json({
    message: "Welcome to Dashboard 🎉",
    user: {
      userId: req.user.userId,
      name:   req.user.name,
      role:   req.user.role
    }
  });
});

router.get("/profile", verifyToken, authorizeRoles("user", "admin", "manager"), (req, res) => {
  res.json({
    message: "User Profile 👤",
    user: {
      userId: req.user.userId,
      name:   req.user.name,
      role:   req.user.role
    }
  });
});

module.exports = router;
