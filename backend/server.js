require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");

const PORT = process.env.PORT || 3000;
// express app
const app = express();

// global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// server run
app.listen(PORT, () => {
  console.log(`Server Running on : ${PORT}`);
});
