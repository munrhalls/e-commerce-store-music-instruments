const express = require("express");
const router = express.Router();
const Watch = require("../models/Watch");
const mongoose = require("mongoose");

// Get all watches
router.get("/", async (req, res, next) => {
  try {
    const watches = await Watch.find();
    res.json(watches);
  } catch (err) {
    next(err);
  }
});

// Create new watch
router.post("/", async (req, res, next) => {
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
router.get("/:id", async (req, res, next) => {
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
router.delete("/:id", async (req, res, next) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if (!watch) {
      return next(new Error("Watch not found"));
    }
    const deletedWatch = await Watch.findByIdAndDelete(req.params.id);
    res.json(deletedWatch);
  } catch (err) {
    next(err);
  }
});

// Update a watch
router.patch("/:id", async (req, res, next) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if (!watch) {
      return next(new Error("Watch not found"));
    }
    const updatedWatch = await Watch.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedWatch);
  } catch (err) {
    next(err);
  }
});

// ?
module.exports = router;
