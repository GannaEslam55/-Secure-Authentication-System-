<<<<<<< HEAD
module.exports = function(role) {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json("Access denied");
        }
        next();
    };
=======
module.exports = function (role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Access denied: insufficient role" });
    }
    next();
  };
>>>>>>> b059437 (gui + editing some problems)
};
