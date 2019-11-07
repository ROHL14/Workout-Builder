import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import TableHead from "./table/TableHead";
import Table from "./table/Table";

import {
  getUserRoutine,
  addExercise,
  deleteExercise
} from "../../actions/routine";

import { getExercises } from "../../actions/exercise";

const AddExercise = ({
  getUserRoutine,
  routine: { routine, loading },
  match,
  addExercise,
  getExercises,
  deleteExercise,
  exercise: { exercises }
}) => {
  useEffect(() => {
    getUserRoutine(match.params.id);
  }, [getUserRoutine, match.params.id]);

  const [formData, setFormData] = useState({
    exercisename: "",
    set: "",
    repetition: "",
    day: ""
  });

  useEffect(() => {
    getExercises();
  }, [getExercises]);

  const { exercisename, set, repetition, day } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const showExercises = () => {
    return routine.exercise.length === 0 ? (
      <div className="section-routine__exercises">
        <h1>You haven't add any exercise yet</h1>
      </div>
    ) : (
      <div className="section-routine__exercises">
        <div className="section-routine__exercises--table-section">
          <h1>Monday</h1>
          <table className="table">
            <TableHead></TableHead>
            {routine.exercise.map(item => {
              if (item.day === "monday") {
                return (
                  <Table
                    key={item._id}
                    RoutineId={match.params.id}
                    exercise={item}
                  ></Table>
                );
              }
              return null;
            })}
          </table>
        </div>
        <div className="section-routine__exercises--table-section">
          <h1>Tuesday</h1>
          <table className="table">
            <TableHead></TableHead>
            {routine.exercise.map(item => {
              if (item.day === "tuesday") {
                return (
                  <Table
                    key={item._id}
                    RoutineId={match.params.id}
                    exercise={item}
                  ></Table>
                );
              }
              return null;
            })}
          </table>
        </div>
        <div className="section-routine__exercises--table-section">
          <h1>Wednesday</h1>
          <table className="table">
            <TableHead></TableHead>
            {routine.exercise.map(item => {
              if (item.day === "wednesday") {
                return (
                  <Table
                    key={item._id}
                    RoutineId={match.params.id}
                    exercise={item}
                  ></Table>
                );
              }
              return null;
            })}
          </table>
        </div>
        <div className="section-routine__exercises--table-section">
          <h1>Thursday</h1>
          <table className="table">
            <TableHead></TableHead>
            {routine.exercise.map(item => {
              if (item.day === "thursday") {
                return (
                  <Table
                    key={item._id}
                    RoutineId={match.params.id}
                    exercise={item}
                  ></Table>
                );
              }
              return null;
            })}
          </table>
        </div>
        <div className="section-routine__exercises--table-section">
          <h1>Friday</h1>
          <table className="table">
            <TableHead></TableHead>
            {routine.exercise.map(item => {
              if (item.day === "friday") {
                return (
                  <Table
                    key={item._id}
                    RoutineId={match.params.id}
                    exercise={item}
                  ></Table>
                );
              }
              return null;
            })}
          </table>
        </div>
        <div className="section-routine__exercises--table-section">
          <h1>Saturday</h1>
          <table className="table">
            <TableHead></TableHead>
            {routine.exercise.map(item => {
              if (item.day === "saturday") {
                return (
                  <Table
                    key={item._id}
                    RoutineId={match.params.id}
                    exercise={item}
                  ></Table>
                );
              }
              return null;
            })}
          </table>
        </div>
        <div className="section-routine__exercises--table-section">
          <h1>Sunday</h1>
          <table className="table">
            <TableHead></TableHead>
            {routine.exercise.map(item => {
              if (item.day === "sunday") {
                return (
                  <Table
                    key={item._id}
                    RoutineId={match.params.id}
                    exercise={item}
                  ></Table>
                );
              }
              return null;
            })}
          </table>
        </div>
      </div>
    );
  };

  return routine === null ? (
    <Spinner></Spinner>
  ) : (
    <div className="section-routine">
      <div className="section-routine__info">
        <h1>Name:{routine.name}</h1>
      </div>
      <div className="section-routine__add">
        <form
          className="form-2"
          onSubmit={e => {
            addExercise(match.params.id, formData).then(() => {
              setFormData({
                ...formData,
                exercisename: "",
                set: "",
                repetition: "",
                day: ""
              });
              getUserRoutine(match.params.id);
            });
          }}
        >
          <div className="form-2__group">
            <select
              name="exercisename"
              value={exercisename}
              onChange={e => onChange(e)}
            >
              <option value="0">Select an exercise</option>
              {exercises.map(item => (
                <option key={item._id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            <small className="">Choose the exercise</small>
          </div>
          <div className="form-2__group">
            <select name="set" value={set} onChange={e => onChange(e)}>
              <option value="0">Select the number of sets</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <small className="">Choose the sets that you will do</small>
          </div>
          <div className="form-2__group">
            <select
              name="repetition"
              value={repetition}
              onChange={e => onChange(e)}
            >
              <option value="0">Select the range of reps</option>
              <option value="3-5">3-5</option>
              <option value="6-8">6-8</option>
              <option value="8-10">8-10</option>
              <option value="8-12">8-12</option>
            </select>
            <small className="">Choose a range of reps</small>
          </div>

          <div className="form-2__group">
            <select name="day" value={day} onChange={e => onChange(e)}>
              <option value="0">Select a day</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
            <small className="">Choose the day</small>
          </div>

          <button type="submit" className="button">
            Add
          </button>
        </form>
      </div>
      {showExercises()}
    </div>
  );
};

AddExercise.propTypes = {
  getUserRoutine: PropTypes.func.isRequired,
  routine: PropTypes.object.isRequired,
  addExercise: PropTypes.func.isRequired,
  getExercises: PropTypes.func.isRequired,
  deleteExercise: PropTypes.func.isRequired,
  exercise: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  routine: state.routine,
  exercise: state.exercise
});

export default connect(
  mapStateToProps,
  { getUserRoutine, addExercise, getExercises, deleteExercise }
)(AddExercise);
