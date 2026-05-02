const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/authorizeRoles");

router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.json({
    message: "Welcome Admin 👑",
    user: {
      userId: req.user.userId,
      name:   req.user.name,
      role:   req.user.role
    }
  });
});

module.exports = router;
