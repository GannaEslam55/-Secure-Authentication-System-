const router = require("express").Router();
<<<<<<< HEAD
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", auth, role("User"), (req, res) => {
    res.json("Welcome User");
=======
const auth   = require("../middleware/authMiddleware");
const role   = require("../middleware/roleMiddleware");

// GET /user  — only Users
router.get("/", auth, role("User"), (req, res) => {
  res.json({ message: `Welcome User, ${req.user.name}` });
});

// GET /user/profile  — only Users (required by assignment)
router.get("/profile", auth, role("User"), (req, res) => {
  res.json({
    message: "Your Profile",
    id:   req.user.id,
    name: req.user.name,
    role: req.user.role
  });
>>>>>>> b059437 (gui + editing some problems)
});

module.exports = router;
