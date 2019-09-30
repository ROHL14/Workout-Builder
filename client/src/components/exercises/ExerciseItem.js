import React from "react";
import PropTypes from "prop-types";

const ExerciseItem = ({ exercise: { name, muscle, description } }) => (
  <div className="exercise">
    <h3 className="name">{name}</h3>
    <h4 className="muscle">{muscle}</h4>
    <p className="description">{description}</p>
  </div>
);

ExerciseItem.propTypes = {
  exercise: PropTypes.object.isRequired
};

export default ExerciseItem;
