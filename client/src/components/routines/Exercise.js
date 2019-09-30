import React from "react";
import PropTypes from "prop-types";

const Exercise = ({
  exercise: { exercisename, muscle, description, set, repetition }
}) => {
  return (
    <tr>
      <td>{exercisename}</td>
      <td>{muscle}</td>
      <td>{description}</td>
      <td>{set}</td>
      <td>{repetition}</td>
    </tr>
  );
};

Exercise.propTypes = {
  exercise: PropTypes.object.isRequired
};

export default Exercise;
