const router = require("express").Router();
<<<<<<< HEAD
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", auth, role("Admin"), (req, res) => {
    res.json("Welcome Admin");
=======
const auth   = require("../middleware/authMiddleware");
const role   = require("../middleware/roleMiddleware");

// GET /admin  — only Admins
router.get("/", auth, role("Admin"), (req, res) => {
  res.json({ message: `Welcome Admin, ${req.user.name}` });
>>>>>>> b059437 (gui + editing some problems)
});

module.exports = router;
