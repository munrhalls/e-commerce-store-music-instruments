const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthError";
  }
}

class AuthorizationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthorizationError";
  }
}

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    throw new AuthError("No Authorization header");
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    throw new AuthError("No token provided");
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.id;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      throw new AuthError("Invalid token");
    } else {
      throw new AuthorizationError("Authorization failed");
    }
  }
};
