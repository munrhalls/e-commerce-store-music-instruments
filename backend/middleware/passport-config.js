require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        process.env.NODE_ENV === "production"
          ? process.env.GOOGLE_CLIENT_ID
          : process.env.test.GOOGLE_CLIENT_ID,
      clientSecret:
        process.env.NODE_ENV === "production"
          ? process.env.GOOGLE_CLIENT_SECRET
          : process.env.test.GOOGLE_CLIENT_SECRET,
      callbackURL: "/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const payload = {
        // Your payload here
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      done(null, token);
    }
  )
);
