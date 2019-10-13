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
    <div className="dashboard__routines--info">
      <Fragment>
        <div className="mt-2">
          <button
            onClick={() => toggleRoutine(!displayRoutine)}
            type="button"
            className="btn btn-ghost"
          >
            {routine.name}
          </button>

          <button
            onClick={() => deleteRoutine(routine._id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
        {displayRoutine && (
          <Fragment>
            <div className="dashboard__routines--content">
              <div className="dashboard__routines--add">
                <button
                  type="button"
                  className="btn-form"
                  data-toggle="modal"
                  data-target="#ModalExercise"
                >
                  Add Exercise
                </button>
                <AddExercise id="ModalExercise" RoutineId={routine._id} />
              </div>

              <div className="dashboard__routines--days">
                <button
                  type="button"
                  className="btn-form btn-ghost"
                  data-toggle="modal"
                  data-target="#ModalMonday"
                >
                  Monday
                </button>
                <div
                  className="modal fade"
                  id="ModalMonday"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="ModalCenter"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="ModalTitle">
                          Monday
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
                      <div className="modal-body">
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
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-form btn-ghost"
                  data-toggle="modal"
                  data-target="#ModalTuesday"
                >
                  Tuesday
                </button>
                <div
                  className="modal fade"
                  id="ModalTuesday"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="ModalCenter"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="ModalTitle">
                          Tuesday
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
                      <div className="modal-body">
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
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-form btn-ghost"
                  data-toggle="modal"
                  data-target="#ModalWednesday"
                >
                  Wednesday
                </button>
                <div
                  className="modal fade"
                  id="ModalWednesday"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="ModalCenter"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="ModalTitle">
                          Wednesday
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
                      <div className="modal-body">
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
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-form btn-ghost"
                  data-toggle="modal"
                  data-target="#ModalThursday"
                >
                  Thursday
                </button>
                <div
                  className="modal fade"
                  id="ModalThursday"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="ModalCenter"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="ModalTitle">
                          Thursday
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
                      <div className="modal-body">
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
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-form btn-ghost"
                  data-toggle="modal"
                  data-target="#ModalFriday"
                >
                  Friday
                </button>
                <div
                  className="modal fade"
                  id="ModalFriday"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="ModalCenter"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="ModalTitle">
                          Friday
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
                      <div className="modal-body">
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
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-form btn-ghost"
                  data-toggle="modal"
                  data-target="#ModalSartuday"
                >
                  Sartuday
                </button>
                <div
                  className="modal fade"
                  id="ModalSartuday"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="ModalCenter"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="ModalTitle">
                          Sartuday
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
                      <div className="modal-body">
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
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-form btn-ghost"
                  data-toggle="modal"
                  data-target="#ModalSunday"
                >
                  Sunday
                </button>
                <div
                  className="modal fade"
                  id="ModalSunday"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="ModalCenter"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="ModalTitle">
                          Sunday
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
                      <div className="modal-body">
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
