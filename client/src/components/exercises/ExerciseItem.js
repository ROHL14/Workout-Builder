import React from "react";
import PropTypes from "prop-types";

const ExerciseItem = ({ exercise: { name, muscle, description } }) => (
  <div className="card u-margin-top-small">
    <div className="card__title">
      <h1>{name}</h1>
    </div>
    <div className="card__info">
      <h3>{muscle}</h3>
    </div>
    <div className="card__description">
      <p>{description}</p>
    </div>
  </div>
);

ExerciseItem.propTypes = {
  exercise: PropTypes.object.isRequired
};

export default ExerciseItem;
