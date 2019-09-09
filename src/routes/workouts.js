const { Router } = require("express");
const router = Router();

const {
  getExercises,
  createExercise,
  getExercise,
  updateExercise,
  deleteExercise
} = require("../controllers/exercisesController");

router
  .route("/")
  .get(getExercises)
  .post(createExercise);

router
  .route("/:id")
  .get(getExercise)
  .put(updateExercise)
  .delete(deleteExercise);

module.exports = router;
