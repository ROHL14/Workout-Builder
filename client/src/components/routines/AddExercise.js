import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import AddExerciseForm from "./AddExerciseForm";

import { getUserRoutine } from "../../actions/routine";

const AddExercise = ({
  getUserRoutine,
  routine: { routine, loading },
  match
}) => {
  useEffect(() => {
    getUserRoutine(match.params.id);
  }, [getUserRoutine, match]);

  return loading === true || routine === null ? (
    <Spinner />
  ) : (
    <div className="container mt-5">
      <Link to="/my-routines" className="btn btn-danger">
        Back to routines
      </Link>
      <AddExerciseForm routineId={routine._id} />
    </div>
  );
};

AddExercise.propTypes = {
  getUserRoutine: PropTypes.func.isRequired,
  routine: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  routine: state.routine
});

export default connect(
  mapStateToProps,
  { getUserRoutine }
)(AddExercise);
