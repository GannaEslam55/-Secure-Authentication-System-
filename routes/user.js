const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", auth, role("User"), (req, res) => {
    res.json("Welcome User");
});

module.exports = router;
