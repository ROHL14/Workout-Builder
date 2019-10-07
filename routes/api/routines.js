const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const { Routine, User, Exercise } = require("../../model");

// @route  POST api/routine
// @desc   Create a routine
// @access  Private
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

// @route  GET api/routines
// @desc   Get all routines
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const routines = await Routine.find({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );
    res.json(routines);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET api/routines/:id
// @desc   Get a routine
// @access Private
router.get("/:id", auth, async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id).populate("user", [
      "name",
      "avatar"
    ]);
    res.json(routine);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/routines/:id
// @desc     Delete a routine
// @access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id);

    if (!routine) {
      return res.status(404).json({ msg: "Routine not found" });
    }

    // Check user
    if (routine.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await routine.remove();

    res.json({ msg: "Routine removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Routine not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route  PUT api/routine/exercise/:id
// @desc   Add exercises to a routine
// @access Private
router.put(
  "/exercise/:id",
  [
    auth,
    [
      [
        check("exercisename", "Exercise is required")
          .not()
          .isEmpty(),
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

    const { exercisename, set, repetition, day } = req.body;

    const exercise = await Exercise.findOne({ name: exercisename });

    const newExercise = {
      exercisename: exercise.name,
      muscle: exercise.muscle,
      description: exercise.description,
      set,
      repetition,
      day
    };

    try {
      const routine = await Routine.findById(req.params.id);

      routine.exercise.unshift(newExercise);

      await routine.save();

      res.json(routine);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  DELETE api/routine/exercise/:id/:exercise_  id
// @desc   Delete an exercises of the routine
// @access Private
router.delete("/exercise/:id/:exercise_id", auth, async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id);

    // Find exercise in the routine
    const exercise = await routine.exercise.find(
      item => item.id === req.params.exercise_id
    );

    if (!exercise) {
      return res.status(404).json({ msg: "Exercise does not exist" });
    }

    // Get remove index
    const removeIndex = routine.exercise
      .map(item => item.id)
      .indexOf(req.params.exercise_id);

    routine.exercise.splice(removeIndex, 1);

    await routine.save();

    res.json(routine.exercise);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
