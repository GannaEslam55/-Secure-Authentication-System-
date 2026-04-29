const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/authorizeRoles");

router.get("/manager", verifyToken, authorizeRoles("manager", "admin"), (req, res) => {
  res.json({ message: "Welcome Manager 👔" });
});

module.exports = router;