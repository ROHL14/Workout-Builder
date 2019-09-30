import React, { Fragment } from "react";
import PropTypes from "prop-types";

const SelectItem = ({ exercise: { name, muscle, description } }) => {
  return (
    <Fragment>
      <option value={name}>{name}</option>
    </Fragment>
  );
};

SelectItem.propTypes = {
  exercise: PropTypes.object.isRequired
};

export default SelectItem;
