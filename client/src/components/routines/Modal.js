import React from "react";
import PropTypes from "prop-types";

const Modal = ({ exercise, description }) => {
  return (
    <div
      class="modal fade"
      id="ModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              {exercise}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{description}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="button button--delete"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  exercise: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Modal;
