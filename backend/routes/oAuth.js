const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/oauth-failed" }),
  (req, res) => {
    res.json({ token: req.user });
  }
);

module.exports = router;
