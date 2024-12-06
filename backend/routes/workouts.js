const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

module.exports = router;
