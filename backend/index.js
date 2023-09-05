require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const watchRoutes = require("./routes/watches");
const userRoutes = require("./routes/users");
const app = express();
const port = 3000;

app.use(express.json());
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

app.use("/watches", watchRoutes);
app.use("/users", userRoutes);

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
