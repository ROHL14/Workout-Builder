import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TableHead from "./table/TableHead";
import Exercise from "./Exercise";

const Routine = ({ routine: { _id, name, exercise } }) => {
  const [displayRoutine, toggleRoutine] = useState(false);

  return (
    <div className="container mt-5">
      <Fragment>
        <div className="mt-2">
          <button
            onClick={() => toggleRoutine(!displayRoutine)}
            type="button"
            className="btn btn-light"
          >
            <h2>{name}</h2>
          </button>
        </div>
        {displayRoutine && (
          <Fragment>
            <div className="container mt-5">
              <h2 className="">Monday</h2>
              <table className="table">
                <TableHead />
                <tbody>
                  {exercise.map(exer => {
                    if (exer.day === "monday") {
                      return <Exercise key={exer._id} exercise={exer} />;
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
            <div className="container mt-5">
              <h2 className="">Tuesday</h2>
              <table className="table">
                <TableHead />
                <tbody>
                  {exercise.map(exer => {
                    if (exer.day === "tuesday") {
                      return <Exercise key={exer._id} exercise={exer} />;
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
            <div className="container mt-5">
              <h2 className="">Wednesday</h2>
              <table className="table">
                <TableHead />
                <tbody>
                  {exercise.map(exer => {
                    if (exer.day === "wednesday") {
                      return <Exercise key={exer._id} exercise={exer} />;
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
            <div className="container mt-5">
              <h2 className="">Thursday</h2>
              <table className="table">
                <TableHead />
                <tbody>
                  {exercise.map(exer => {
                    if (exer.day === "thursday") {
                      return <Exercise key={exer._id} exercise={exer} />;
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
            <div className="container mt-5">
              <h2 className="">Friday</h2>
              <table className="table">
                <TableHead />
                <tbody>
                  {exercise.map(exer => {
                    if (exer.day === "friday") {
                      return <Exercise key={exer._id} exercise={exer} />;
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
            <div className="container mt-5">
              <h2 className="">Saturday</h2>
              <table className="table">
                <TableHead />
                <tbody>
                  {exercise.map(exer => {
                    if (exer.day === "saturday") {
                      return <Exercise key={exer._id} exercise={exer} />;
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
            <div className="container mt-5">
              <h2 className="">Sunday</h2>
              <table className="table">
                <TableHead />
                <tbody>
                  {exercise.map(exer => {
                    if (exer.day === "sunday") {
                      return <Exercise key={exer._id} exercise={exer} />;
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
            <Fragment>
              <Link to={`/add-exercise/${_id}`} className="btn btn-light">
                Add an exercise
              </Link>
            </Fragment>
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

Routine.propTypes = {
  routine: PropTypes.object.isRequired
};

export default Routine;
