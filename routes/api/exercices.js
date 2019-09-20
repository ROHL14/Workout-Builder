const express = require("express");
const router = express.Router();

const { Exercise } = require("../../model");

// @route  GET api/exercise
// @desc   Get all exercises
// @accses Public
router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET api/exercise/:id
// @desc   Get exercise by ID
// @acces  Public
router.get("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);

    if (!exercise) {
      return res.status(404).json({ msg: "Exercise not found" });
    }

    res.json(exercise);
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Exercise not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
