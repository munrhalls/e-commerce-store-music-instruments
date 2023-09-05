const express = require("express");
const mongoose = require("mongoose");
const watchRoutes = require("./routes/watches");

const app = express();
const port = 3000;

// Express parsing JSON bodies
app.use(express.json());

// JSON parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error(err);
    return res.status(400).json({ message: "Invalid JSON payload" }); // Bad Request
  }
  next();
});

// Connect to MongoDB Atlas
const uri =
  "mongodb+srv://antarcticdepths71:fzFba9H61iU2IAAT@clusterwatches.1ssaico.mongodb.net/";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Failed to connect to MongoDB Atlas", err));

// Use the watch routes
app.use("/watches", watchRoutes);

// Handle errors - keep this after all your routes
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
