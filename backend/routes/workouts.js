const express = require("express");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single workout" });
});

// POST a new workout
router.post("/", (req, res) => {
  res.json({ message: "POST a new workout" });
});

// UPDATE a workout
router.patch("/", (req, res) => {
  res.json({ message: "UPDATE a workout" });
});

//DELETE a workout
router.delete("/", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

module.exports = router;
