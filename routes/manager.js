const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", auth, role("Manager"), (req, res) => {
    res.json("Welcome Manager");
});

module.exports = router;
