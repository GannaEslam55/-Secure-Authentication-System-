const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", auth, role("Admin"), (req, res) => {
    res.json("Welcome Admin");
});

module.exports = router;
