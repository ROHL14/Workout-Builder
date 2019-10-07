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
  exercise: { exercises }
}) => {
  const [formData, setFormData] = useState({
    exercisename: "",
    set: "",
    repetition: "",
    day: ""
  });

  useEffect(() => {
    getExercises();
  }, [getExercises]);

  const { exercisename, set, repetition, day } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        addExercise(routineId, formData, history);
      }}
    >
      <div className="modal-body">
        <div className="form-group">
          <select
            name="exercisename"
            value={exercisename}
            onChange={e => onChange(e)}
          >
            <option value="0">Select an exercise</option>
            {exercises.map(item => (
              <option key={item._id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <small className="form-text">Choose the exercise</small>
        </div>
        <div className="form-group">
          <select name="set" value={set} onChange={e => onChange(e)}>
            <option value="0">Select the number of sets</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <small className="form-text">Choose the sets that you will do</small>
        </div>
        <div className="form-group">
          <select
            name="repetition"
            value={repetition}
            onChange={e => onChange(e)}
          >
            <option value="0">Select the range of reps</option>
            <option value="3-5">3-5</option>
            <option value="6-8">6-8</option>
            <option value="8-10">8-10</option>
            <option value="8-12">8-12</option>
          </select>
          <small className="form-text">Choose a range of reps</small>
        </div>

        <div className="form-group">
          <select name="day" value={day} onChange={e => onChange(e)}>
            <option value="0">Select a day</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
          <small className="form-text">Choose the day</small>
        </div>
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
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
