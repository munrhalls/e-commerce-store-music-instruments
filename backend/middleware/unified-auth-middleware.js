const jwt = require("jsonwebtoken");
const passport = require("passport");

module.exports = (req, res, next) => {
  if (req.header("Authorization")) {
    // JWT middleware logic
    const authHeader = req.header("Authorization");
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.id;
      next();
    } catch (err) {
      res.status(401).json({ message: "Token is not valid" });
    }
  } else {
    passport.authenticate("google", { session: false })(req, res, next);
  }
};
