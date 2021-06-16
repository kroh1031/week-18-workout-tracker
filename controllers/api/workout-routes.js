const router = require("express").Router();
const { Workout } = require("../../models");

// All routes prepended with /api/workouts
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
    const newWorkout = await Workout.updateOne(
      { _id: req.params.id },
      {
        $set: {
          type: req.body.type,
          name: req.body.name,
          duration: req.body.duration,
          weight: req.body.weight,
          reps: req.body.reps,
          sets: req.body.sets,
        },
      }
    );
    res.json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get data for /range route
router.get("/range", async (req, res) => {
  try {
    const workoutData = await Workout.find({});
    res.json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
