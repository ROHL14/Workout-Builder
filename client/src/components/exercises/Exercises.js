import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ExerciseItem from "./ExerciseItem";
import { getExercises } from "../../actions/exercise";

const Exercises = ({ getExercises, exercise: { exercises, loading } }) => {
  useEffect(() => {
    getExercises();
  }, [getExercises]);

  return (
    <Fragment>
      <div className="background"></div>
      <section className="section-exercises">
        <div className="section-exercises__container">
          <h1 className="section-exercises__title">Exercises</h1>
          <div className="section-exercises__list u-margin-top-small">
            {loading ? (
              <Spinner />
            ) : (
              exercises.map(exercise => (
                <ExerciseItem key={exercise._id} exercise={exercise} />
              ))
            )}
          </div>
        </div>
      </section>
    </Fragment>
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
