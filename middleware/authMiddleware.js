const jwt = require("jsonwebtoken");

<<<<<<< HEAD
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
=======
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
>>>>>>> recovery-branch

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
<<<<<<< HEAD
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
=======
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
>>>>>>> b059437 (gui + editing some problems)
};
>>>>>>> recovery-branch
