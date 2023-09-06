const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const authMiddleware = require("../middleware/auth");
const jwt = require("jsonwebtoken");

const validateFields = (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    const err = new Error("Please enter all fields");
    err.customCode = 400;
    throw err;
  }
};

const checkExistingUser = async (req, res) => {
  const { email, username } = req.body;
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    const err = new Error("Username or email already exists");
    err.customCode = 400;
    throw err;
  }
};

const generateToken = (user) => {
  const payload = {
    id: user._id,
    username: user.username,
  };
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT Secret is not defined");
  }
  return jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
};

router.post("/register", async (req, res) => {
  try {
    validateFields(req, res);
    await checkExistingUser(req, res);

    // Hash password and save user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    const savedUser = await newUser.save();

    // Generate JWT token
    const token = generateToken(savedUser);

    res.json({ token });
  } catch (err) {
    console.error("Error during registration:", err);

    if (err.code === 11000) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    if (err.customCode) {
      return res.status(err.customCode).json({ message: err.message });
    }

    return res
      .status(500)
      .json({ message: "Server error during registration" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // Generate JWT token
    const token = generateToken(user); // Assuming you've defined generateToken as before

    res.json({ token });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Server error during login" });
  }
});

router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
