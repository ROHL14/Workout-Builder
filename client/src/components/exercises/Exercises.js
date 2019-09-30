import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ExerciseItem from "./ExerciseItem";
import { getExercises } from "../../actions/exercise";

const Exercises = ({ getExercises, exercise: { exercises, loading } }) => {
  useEffect(() => {
    getExercises();
  }, [getExercises]);

  return loading ? (
    <Spinner />
  ) : (
    <section className="exercise-section">
      <h1>Exercises</h1>
      <div className="exercises">
        {exercises.map(exercise => (
          <ExerciseItem key={exercise._id} exercise={exercise} />
        ))}
      </div>
    </section>
  );
};

Exercises.propTypes = {
  getExercises: PropTypes.func.isRequired,
  exercise: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  exercise: state.exercise
});

export default connect(
  mapStateToProps,
  { getExercises }
)(Exercises);
