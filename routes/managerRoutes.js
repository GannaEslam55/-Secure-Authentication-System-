const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/authorizeRoles");

router.get("/manager", verifyToken, authorizeRoles("manager", "admin"), (req, res) => {
  res.json({
    message: "Welcome Manager 👔",
    user: {
      userId: req.user.userId,
      name:   req.user.name,
      role:   req.user.role
    }
  });
});

module.exports = router;
