import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  getUserRoutines,
  createRoutine,
  deleteRoutine
} from "../../actions/routine";

const Routine = ({
  getUserRoutines,
  createRoutine,
  deleteRoutine,
  routine: { routines, loading }
}) => {
  useEffect(() => {
    getUserRoutines();
  }, [getUserRoutines]);

  const [formData, setFormData] = useState({
    name: ""
  });

  const { name } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createRoutine({ name: formData.name }).then(() => {
      setFormData({ ...formData, name: "" });
      getUserRoutines();
    });
  };

  return (
    <Fragment>
      <div className="dashboard__add">
        <form className="form-2" onSubmit={e => onSubmit(e)}>
          <div className="form-2__group">
            <input
              className="form-2__input"
              type="text"
              placeholder="Routine name"
              name="name"
              required
              value={name}
              onChange={e => onChange(e)}
            />
          </div>
          <button className="button" type="submit">
            Save Routine
          </button>
        </form>
      </div>

      <Fragment>
        <div className="dashboard__routines">
          <Fragment>
            {routines.map(routine => (
              <div className="routine" key={routine._id}>
                <Link className="routine__name" to={`routine/${routine._id}`}>
                  {routine.name}
                </Link>
                <button
                  onClick={() => deleteRoutine(routine._id)}
                  type="button"
                  className="button button--delete"
                >
                  Delete
                </button>
              </div>
            ))}
          </Fragment>
        </div>
      </Fragment>
    </Fragment>
  );
};

Routine.propTypes = {
  getUserRoutines: PropTypes.func.isRequired,
  createRoutine: PropTypes.func.isRequired,
  routine: PropTypes.object.isRequired,
  deleteRoutine: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  routine: state.routine
});

export default connect(
  mapStateToProps,
  { getUserRoutines, createRoutine, deleteRoutine }
)(Routine);
