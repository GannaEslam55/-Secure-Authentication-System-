const jwt = require("jsonwebtoken");

<<<<<<< HEAD
module.exports = function(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json("No token");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        res.status(401).json("Invalid token");
    }
=======
module.exports = function (req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
>>>>>>> b059437 (gui + editing some problems)
};
