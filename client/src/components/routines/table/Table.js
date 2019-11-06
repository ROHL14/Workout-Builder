import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteExercise } from "../../../actions/routine";
import Modal from "../Modal";

const Table = ({
  RoutineId,
  exercise: { _id, exercisename, muscle, description, set, repetition },
  deleteExercise
}) => {
  return (
    <tbody className="table__body">
      <tr className="table__row">
        <td>
          <button
            className="button"
            type="button"
            data-toggle="modal"
            data-target="#ModalCenter"
          >
            {exercisename}
          </button>
          <Modal exercise={exercisename} description={description}></Modal>
        </td>
        <td>{muscle}</td>
        <td>{set}</td>
        <td>{repetition}</td>
        <td>
          <button
            onClick={() => deleteExercise(RoutineId, _id)}
            type="button"
            className="button button--delete"
          >
            <i className="fas fa-times" />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

Table.propTypes = {
  RoutineId: PropTypes.string.isRequired,
  exercise: PropTypes.object.isRequired,
  deleteExercise: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExercise }
)(Table);
