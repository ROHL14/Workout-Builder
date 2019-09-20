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

// @route  PUT api/routine/day/exercise
// @desc   Add exercises to the routine
// @accses Private
router.put(
  "/day1/exercise",
  [
    auth,
    [
      [
        check("set", "Number of sets are required")
          .not()
          .isEmpty(),
        check("repetition", "Number of repetitions are required")
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

    const { exercise, muscle, description, set, repetition } = req.body;

    const newExercise = { exercise, muscle, description, set, repetition };

    try {
      const routine = await Routine.findOne({ user: req.user.id });

      routine.day1.unshift(newExercise);

      await routine.save();

      res.json(routine);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT api/routine/day/exercise
// @desc   Add exercises to the routine
// @accses Private
router.put(
  "/day2/exercise",
  [
    auth,
    [
      [
        check("set", "Number of sets are required")
          .not()
          .isEmpty(),
        check("repetition", "Number of repetitions are required")
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

    const { exercise, muscle, description, set, repetition } = req.body;

    const newExercise = { exercise, muscle, description, set, repetition };

    try {
      const routine = await Routine.findOne({ user: req.user.id });

      routine.day2.unshift(newExercise);

      await routine.save();

      res.json(routine);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT api/routine/day/exercise
// @desc   Add exercises to the routine
// @accses Private
router.put(
  "/day3/exercise",
  [
    auth,
    [
      [
        check("set", "Number of sets are required")
          .not()
          .isEmpty(),
        check("repetition", "Number of repetitions are required")
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

    const { exercise, muscle, description, set, repetition } = req.body;

    const newExercise = { exercise, muscle, description, set, repetition };

    try {
      const routine = await Routine.findOne({ user: req.user.id });

      routine.day3.unshift(newExercise);

      await routine.save();

      res.json(routine);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT api/routine/day/exercise
// @desc   Add exercises to the routine
// @accses Private
router.put(
  "/day4/exercise",
  [
    auth,
    [
      [
        check("set", "Number of sets are required")
          .not()
          .isEmpty(),
        check("repetition", "Number of repetitions are required")
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

    const { exercise, muscle, description, set, repetition } = req.body;

    const newExercise = { exercise, muscle, description, set, repetition };

    try {
      const routine = await Routine.findOne({ user: req.user.id });

      routine.day4.unshift(newExercise);

      await routine.save();

      res.json(routine);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT api/routine/day/exercise
// @desc   Add exercises to the routine
// @accses Private
router.put(
  "/day5/exercise",
  [
    auth,
    [
      [
        check("set", "Number of sets are required")
          .not()
          .isEmpty(),
        check("repetition", "Number of repetitions are required")
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

    const { exercise, muscle, description, set, repetition } = req.body;

    const newExercise = { exercise, muscle, description, set, repetition };

    try {
      const routine = await Routine.findOne({ user: req.user.id });

      routine.day5.unshift(newExercise);

      await routine.save();

      res.json(routine);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT api/routine/day/exercise
// @desc   Add exercises to the routine
// @accses Private
router.put(
  "/day6/exercise",
  [
    auth,
    [
      [
        check("set", "Number of sets are required")
          .not()
          .isEmpty(),
        check("repetition", "Number of repetitions are required")
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

    const { exercise, muscle, description, set, repetition } = req.body;

    const newExercise = { exercise, muscle, description, set, repetition };

    try {
      const routine = await Routine.findOne({ user: req.user.id });

      routine.day6.unshift(newExercise);

      await routine.save();

      res.json(routine);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT api/routine/day/exercise
// @desc   Add exercises to the routine
// @accses Private
router.put(
  "/day7/exercise",
  [
    auth,
    [
      [
        check("set", "Number of sets are required")
          .not()
          .isEmpty(),
        check("repetition", "Number of repetitions are required")
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

    const { exercise, muscle, description, set, repetition } = req.body;

    const newExercise = { exercise, muscle, description, set, repetition };

    try {
      const routine = await Routine.findOne({ user: req.user.id });

      routine.day7.unshift(newExercise);

      await routine.save();

      res.json(routine);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
