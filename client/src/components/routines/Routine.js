import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TableHead from "./table/TableHead";
import Exercise from "./Exercise";
import AddExercise from "./AddExercise";
import { deleteRoutine } from "../../actions/routine";

const Routine = ({ routine, deleteRoutine }) => {
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
            <h2>{routine.name}</h2>
          </button>
          <button
            onClick={() => deleteRoutine(routine._id)}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times" />
          </button>
        </div>
        {displayRoutine && (
          <Fragment>
            <div>
              <div className="mt-5">
                <button
                  type="button"
                  className="btn btn-light"
                  data-toggle="modal"
                  data-target="#ModalExercise"
                >
                  Add Exercise
                </button>
                <AddExercise id="ModalExercise" RoutineId={routine._id} />
              </div>
              <div>
                <div className="container mt-5">
                  <h5 className="">Monday</h5>
                  <table className="table">
                    <TableHead />
                    <tbody>
                      {routine.exercise.map(exer => {
                        if (exer.day === "monday") {
                          return (
                            <Exercise
                              key={exer._id}
                              exercise={exer}
                              RoutineId={routine._id}
                            />
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="container mt-5">
                  <h5 className="">Tuesday</h5>
                  <table className="table">
                    <TableHead />
                    <tbody>
                      {routine.exercise.map(exer => {
                        if (exer.day === "tuesday") {
                          return (
                            <Exercise
                              key={exer._id}
                              exercise={exer}
                              RoutineId={routine._id}
                            />
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="container mt-5">
                  <h5 className="">Wednesday</h5>
                  <table className="table">
                    <TableHead />
                    <tbody>
                      {routine.exercise.map(exer => {
                        if (exer.day === "wednesday") {
                          return (
                            <Exercise
                              key={exer._id}
                              exercise={exer}
                              RoutineId={routine._id}
                            />
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="container mt-5">
                  <h5 className="">Thursday</h5>
                  <table className="table">
                    <TableHead />
                    <tbody>
                      {routine.exercise.map(exer => {
                        if (exer.day === "thursday") {
                          return (
                            <Exercise
                              key={exer._id}
                              exercise={exer}
                              RoutineId={routine._id}
                            />
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="container mt-5">
                  <h5 className="">Friday</h5>
                  <table className="table">
                    <TableHead />
                    <tbody>
                      {routine.exercise.map(exer => {
                        if (exer.day === "friday") {
                          return (
                            <Exercise
                              key={exer._id}
                              exercise={exer}
                              RoutineId={routine._id}
                            />
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="container mt-5">
                  <h5 className="">Saturday</h5>
                  <table className="table">
                    <TableHead />
                    <tbody>
                      {routine.exercise.map(exer => {
                        if (exer.day === "saturday") {
                          return (
                            <Exercise
                              key={exer._id}
                              exercise={exer}
                              RoutineId={routine._id}
                            />
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="container mt-5">
                  <h5 className="">Sunday</h5>
                  <table className="table">
                    <TableHead />
                    <tbody>
                      {routine.exercise.map(exer => {
                        if (exer.day === "sunday") {
                          return (
                            <Exercise
                              key={exer._id}
                              exercise={exer}
                              RoutineId={routine._id}
                            />
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

Routine.propTypes = {
  routine: PropTypes.object.isRequired,
  deleteRoutine: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteRoutine }
)(Routine);
