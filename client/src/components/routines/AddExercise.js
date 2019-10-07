import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddExerciseForm from "./AddExerciseForm";

import { getUserRoutine } from "../../actions/routine";

const AddExercise = ({ RoutineId, getUserRoutine }) => {
  useEffect(() => {
    getUserRoutine(RoutineId);
  }, [getUserRoutine, RoutineId]);
  return (
    <div
      className="modal fade"
      id="ModalExercise"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="ModalCenter"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalTitle">
              Create a Routine
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <AddExerciseForm routineId={RoutineId} />
        </div>
      </div>
    </div>
  );
};

AddExercise.propTypes = {
  getUserRoutine: PropTypes.func.isRequired,
  RoutineId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  routine: state.routine
});

export default connect(
  mapStateToProps,
  { getUserRoutine }
)(AddExercise);
