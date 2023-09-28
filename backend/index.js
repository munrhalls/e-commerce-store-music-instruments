// Modules
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const Sentry = require("@sentry/node");
const { ProfilingIntegration } = require("@sentry/profiling-node");
const watchRoutes = require("./routes/watches");
const userRoutes = require("./routes/users");
const oAuthRoutes = require("./routes/oAuthRoutes");
const logger = require("./logger");

// Configurations
require("dotenv").config();
require("./passport-config");
// Example: Log server start

// Constants
const isProd = process.env.NODE_ENV === "production";
const port = 3000;

// Initialize App
const app = express();

// Initialize Sentry
const initSentry = () => {
  Sentry.init({
    dsn: process.env.SENTRY,
    release: "lux-logium@1.0.0",
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Sentry.Integrations.Express({ app }),
      new ProfilingIntegration(),
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
  });
  app.use(Sentry.Handlers.tracingHandler());
  app.use(Sentry.Handlers.requestHandler());
};

// Middleware Setup
const setupMiddleware = () => {
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:4200",
      methods: "GET,POST",
      credentials: true,
    })
  );
  app.use(passport.initialize());
};

// Route Setup
const setupRoutes = () => {
  app.use("/watches", watchRoutes);
  app.use("/users", userRoutes);
  app.use("/auth", oAuthRoutes);
};

// Error Handlers
const setupErrorHandlers = () => {
  app.use(Sentry.Handlers.errorHandler());
  app.use((err, req, res, next) => {
    if (err instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  });
};

// MongoDB Connection
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Failed to connect to MongoDB Atlas", err);
  }
};
const disconnectFromMongoDB = async () => {
  await mongoose.disconnect();
};

// Initialization
const initializeApp = async () => {
  initSentry();
  setupMiddleware();
  setupRoutes();
  setupErrorHandlers();
  await connectToMongoDB();
};

// Teardown
const closeApp = async () => {
  await disconnectFromMongoDB();
  Sentry.close(2000);
};

// Start App
const startServer = async (port) => {
  await initializeApp();
  return app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });
};

if (require.main === module) {
  startServer(3000);
  logger.info(`Server running on port ${port}`);
}

module.exports = { initializeApp, closeApp, app };
