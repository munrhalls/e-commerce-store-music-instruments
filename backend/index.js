const Sentry = require("@sentry/node");
const { ProfilingIntegration } = require("@sentry/profiling-node");
require("dotenv").config();
//
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
require("./passport-config");
const watchRoutes = require("./routes/watches");
const userRoutes = require("./routes/users");
const oAuthRoutes = require("./routes/oAuthRoutes");
const session = require("express-session");
const cors = require("cors");
const isProd = process.env.NODE_ENV === "production";

const app = express();
// SENTRY
Sentry.init({
  dsn: process.env.SENTRY,
  // environment: "production",
  release: "lux-logium@1.0.0",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    new ProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
});

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// All your controllers should live here
app.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});

// The error handler must be registered before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

// const port = process.env.PORT || 3000;
const port = 3000;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: isProd ? "none" : "lax",
      secure: isProd,
    },
  })
);

app.use(express.json());
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error(err);
    return res.status(400).json({ message: "Invalid JSON payload" }); // Bad Request
  }
  next();
});

// CONNECT TO MONGODB ATLAS DATABASE
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Failed to connect to MongoDB Atlas", err));

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({ error: "Something went wrong!" });
});

// DISCONNECT FROM MONGODB ATLAS DATABASE
const closeMongoDBConnection = () => {
  mongoose.connection
    .close()
    .then(() => {
      console.log("MongoDB connection closed");
    })
    .catch((err) => {
      console.log("Error closing MongoDB connection", err);
    });
};

const corsOptions = {
  origin: "http://localhost:4200",
  methods: "GET,POST",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

app.use(passport.session());
app.use(passport.initialize());
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use("/watches", watchRoutes);
app.use("/users", userRoutes);
app.use("/auth", oAuthRoutes);

// Sentry Error Handler Middleware (Place this after your routes but before other error handlers)
app.use(Sentry.Handlers.errorHandler());

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

// Start the server
// const startServer = () => {
//   return app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
//   });
// };

// module.exports = { app, startServer, closeMongoDBConnection };
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
