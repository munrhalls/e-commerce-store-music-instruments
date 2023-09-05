const express = require("express");
const router = express.Router();
const Watch = require("../models/Watch");
const mongoose = require("mongoose");
const auth = require("../middleware/auth");

// Get all watches
router.get("/", auth, async (req, res, next) => {
  try {
    const watches = await Watch.find();
    res.json(watches);
  } catch (err) {
    next(err);
  }
});

// Create new watch
router.post("/", auth, async (req, res, next) => {
  try {
    const newWatch = new Watch(req.body);
    const savedWatch = await newWatch.save();
    res.json(savedWatch);
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ message: err.message });
    } else {
      next(err);
    }
  }
});

// Get specific watch
router.get("/:id", auth, async (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID format"); // Bad request
  }
  try {
    const watch = await Watch.findById(id);
    if (!watch) {
      return res.status(404).send("Watch not found"); // Not found
    }
    res.json(watch);
  } catch (err) {
    next(err);
  }
});

// Delete a watch
router.delete("/:id", auth, async (req, res, next) => {
  try {
    const deletedWatch = await Watch.findByIdAndDelete(req.params.id);

    if (!deletedWatch) {
      return res.status(404).json({ message: "Watch not found" });
    }

    res.json(deletedWatch);
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    next(err);
  }
});

// Update a watch
router.patch("/:id", auth, async (req, res, next) => {
  try {
    const watchToUpdate = await Watch.findById(req.params.id);
    if (!watchToUpdate) {
      return next(new Error("Watch not found"));
    }

    watchToUpdate.set(req.body); // set the updated fields on the model

    // Manual validation check
    const validationError = watchToUpdate.validateSync();
    if (validationError) {
      return next(validationError);
    }

    const updatedWatch = await Watch.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true, // Make sure to include this
      }
    );

    res.json(updatedWatch);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
