const router = require("express").Router();
const { Workout } = require("../../models");

// All routes prepended with /api/workouts
// get route for most recent workout
router.get("/", async (req, res) => {
  try {
    const workoutData = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]);
    res.json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// submit a new workout
router.post("/", async (req, res) => {
  try {
    const newWorkout = await Workout.create({});
    console.log(newWorkout);
    res.json(newWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a workout
router.put("/:id", async (req, res) => {
  try {
    const newWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          exercises: req.body,
        },
      },
      { new: true, runValidators: true }
    );
    res.json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get data for /range route
router.get("/range", async (req, res) => {
  try {
    const workoutData = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]);
    res.json(workoutData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
