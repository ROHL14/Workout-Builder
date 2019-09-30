import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createRoutine } from "../../actions/routine";

const CreateRoutine = ({ createRoutine, history }) => {
  const [formData, setFormData] = useState({
    name: ""
  });

  const { name } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createRoutine(formData, history);
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="Modal"
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
            <form className="form" onSubmit={e => onSubmit(e)}>
              <div className="modal-body">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Routine name"
                    name="name"
                    required
                    value={name}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Routine
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CreateRoutine.propTypes = {
  createRoutine: PropTypes.func.isRequired
};

export default connect(
  null,
  { createRoutine }
)(withRouter(CreateRoutine));
