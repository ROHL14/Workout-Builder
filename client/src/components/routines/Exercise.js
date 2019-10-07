import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteExercise } from "../../actions/routine";

const Exercise = ({
  RoutineId,
  exercise: { _id, exercisename, muscle, description, set, repetition },
  deleteExercise
}) => {
  return (
    <tr>
      <td>{exercisename}</td>
      <td>{muscle}</td>
      <td>{description}</td>
      <td>{set}</td>
      <td>{repetition}</td>
      <td>
        <button
          onClick={() => deleteExercise(RoutineId, _id)}
          type="button"
          className="btn btn-danger"
        >
          <i className="fas fa-times" />
        </button>
      </td>
    </tr>
  );
};

Exercise.propTypes = {
  RoutineId: PropTypes.string.isRequired,
  exercise: PropTypes.object.isRequired,
  deleteExercise: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExercise }
)(Exercise);
