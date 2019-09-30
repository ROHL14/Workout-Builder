import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExercise } from "../../actions/routine";
import { getExercises } from "../../actions/exercise";

const AddExerciseForm = ({
  routineId,
  addExercise,
  history,
  getExercises,
  exercise: { exercises, loading }
}) => {
  const [formData, setFormData] = useState({
    exercisename: "",
    muscle: "",
    description: "",
    set: "",
    repetition: "",
    day: ""
  });

  useEffect(() => {
    getExercises();
  }, [getExercises]);

  const { exercisename, muscle, description, set, repetition, day } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="container mt-5">
      <h2>Add exercise</h2>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addExercise(routineId, formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="Exercise Name"
            name="exercisename"
            value={exercisename}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Muscle"
            name="muscle"
            value={muscle}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Exercise Description"
            value={description}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Sets"
            name="set"
            value={set}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Repetitions"
            name="repetition"
            value={repetition}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Day"
            name="day"
            value={day}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

AddExerciseForm.propTypes = {
  addExercise: PropTypes.func.isRequired,
  getExercises: PropTypes.func.isRequired,
  exercise: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  exercise: state.exercise
});

export default connect(
  mapStateToProps,
  { addExercise, getExercises }
)(withRouter(AddExerciseForm));
