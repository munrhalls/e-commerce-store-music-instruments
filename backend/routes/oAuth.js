const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/google",
  (req, res, next) => {
    console.log("Initiating Google OAuth");  // Debug line
    passport.authenticate("google", {
      scope: ["email"]
    })(req, res, next);
  }
);

router.get(
  "/google/callback",
  (req, res, next) => {
    console.log("Received Google OAuth callback");  // Debug line
    passport.authenticate("google", {
      failureRedirect: "/oauth-failed",
      session: false  // Important: set session to false
    }, (err, token, info) => {
      if (err) {
        console.error("OAuth Error: ", err);  // Debug line
        return next(err);
      }
      if (!token) {
        console.error("OAuth Token Error: ", info);  // Debug line
        return res.redirect("/oauth-failed");
      }
      console.log("OAuth successful, sending token");  // Debug line
      return res.json({ token });
    })(req, res, next);
  }
);

module.exports = router;
