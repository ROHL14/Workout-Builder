const exercisesController = {};
const { Exercise } = require("../models");

// Find all the exercises
exercisesController.getExercises = async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
};

// Create the exercises
exercisesController.createExercise = async (req, res) => {
  const { name, muscle, description } = req.body;
  const newExercise = new Exercise({
    name,
    muscle,
    description
  });
  await newExercise.save();
  res.json({ message: "Exercise save" });
};

// Find one Exercise
exercisesController.getExercise = async (req, res) => {
  const exercise = await Exercise.findById(req.params.id);
  res.json(exercise);
};

// Update the exercise
exercisesController.updateExercise = async (req, res) => {
  const { name, muscle, description } = req.body;
  await Exercise.findOneAndUpdate(req.params.id, {
    name,
    muscle,
    description
  });
  res.json({ message: "Exercise updated" });
};

// Delete the exercise
exercisesController.deleteExercise = async (req, res) => {
  await Exercise.findByIdAndDelete(req.params.id);
  res.json({ message: "Exercise deleted" });
};

module.exports = exercisesController;
