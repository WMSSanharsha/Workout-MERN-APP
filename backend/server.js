require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

const PORT = process.env.PORT || 3000;
// express app
const app = express();

// global middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // server run
    app.listen(PORT, () => {
      console.log(`Connected to the DB & Server Running on : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
