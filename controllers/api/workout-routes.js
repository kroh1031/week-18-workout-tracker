const router = require("express").Router();
const { Workout } = require("../../models");

// All routes starting with /api/workouts
// submit a new workout
router.post("/", async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a workout
router.put("/:id", async (req, res) => {
  try {
    const newWorkout = await Workout.updateOne({});
    res.json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

//
module.exports = router;
