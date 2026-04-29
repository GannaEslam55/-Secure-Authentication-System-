const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/authorizeRoles");

router.get(
  "/profile",
  verifyToken,
  authorizeRoles("user", "admin", "manager"),
  (req, res) => {
    res.json({
      message: "User Profile 👤",
      user: req.user
    });
  }
);

module.exports = router;