const jwt = require("jsonwebtoken");
const passport = require("passport");

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader ? authHeader.split(" ")[1] : null;

  if (req.path.startsWith('/auth/google')) {
    // OAuth logic
    passport.authenticate("google", { session: false })(req, res, next);
  } else if (token) {
    // JWT logic
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.id;
      next();
    } catch (err) {
      res.status(401).json({ message: "Token is not valid" });
    }
  } else {
    res.status(401).json({ message: "No Authorization header or token" });
  }
};
