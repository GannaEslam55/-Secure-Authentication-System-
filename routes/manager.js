const router = require("express").Router();
<<<<<<< HEAD
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", auth, role("Manager"), (req, res) => {
    res.json("Welcome Manager");
=======
const auth   = require("../middleware/authMiddleware");
const role   = require("../middleware/roleMiddleware");

// GET /manager  — only Managers
router.get("/", auth, role("Manager"), (req, res) => {
  res.json({ message: `Welcome Manager, ${req.user.name}` });
>>>>>>> b059437 (gui + editing some problems)
});

module.exports = router;
