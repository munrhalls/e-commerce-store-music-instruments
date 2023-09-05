require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const UNAUTHORIZED = 401;

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res
      .status(UNAUTHORIZED)
      .json({ message: "No Authorization header, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(UNAUTHORIZED)
      .json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(UNAUTHORIZED).json({ message: "Token is not valid" });
  }
};
