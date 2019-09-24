const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const { Routine, User } = require("../../model");

// @route  POST api/routine
// @desc   Create a routine
// @acces  Private
router.post("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const newRoutine = new Routine({
      user: req.user.id,
      name: req.body.name,
      avatar: user.avatar
    });

    const routine = await newRoutine.save();

    res.json(routine);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  PUT api/routine/exercise
// @desc   Add exercises to the routine
// @accses Private
router.put(
  "/exercise",
  [
    auth,
    [
      [
        check("set", "Number of sets are required")
          .not()
          .isEmpty(),
        check("repetition", "Number of repetitions are required")
          .not()
          .isEmpty(),
        check("day", "Day to do the exercise is required")
          .not()
          .isEmpty()
      ]
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      exercisename,
      muscle,
      description,
      set,
      repetition,
      day
    } = req.body;

    const newExercise = {
      exercisename,
      muscle,
      description,
      set,
      repetition,
      day
    };

    try {
      const routine = await Routine.findOne({ user: req.user.id });

      routine.exercise.unshift(newExercise);

      await routine.save();

      res.json(routine);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  GET api/routines
// @desc   Get all routines
// @accses Private
router.get("/", auth, async (req, res) => {
  try {
    const routines = await Routine.find().populate("user", ["name", "avatar"]);
    res.json(routines);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  DELETE api/routine/exercise/:exc_id
// @desc   Delete exercises from the routine
// @accses Private
router.delete("/exercise/:exc_id", auth, async (req, res) => {
  try {
    const routine = await Routine.findOne({ user: req.user.id });

    // Get the remove index
    const removeIndex = routine.exercise
      .map(item => item.id)
      .indexOf(req.params.exc_id);

    routine.exercise.splice(removeIndex, 1);

    await routine.save();
    res.json(routine);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
