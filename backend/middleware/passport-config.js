require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");

console.log("Passport Config Loaded");  // Debug line

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
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("Inside GoogleStrategy");  // Debug line
      console.log("Access Token:", accessToken);  // Debug line
      console.log("Refresh Token:", refreshToken);  // Debug line
      console.log("Profile:", profile);  // Debug line

      const payload = {
        id: profile.id,
        email: profile.emails[0].value,
      };

      console.log("Payload:", payload);  // Debug line

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      console.log("JWT Token:", token);  // Debug line

      done(null, token);
    }
  )
);
