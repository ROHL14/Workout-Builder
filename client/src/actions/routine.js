import axios from "axios";
import { setAlert } from "./alert";

import {
  CREATE_ROUTINE,
  DELETE_ROUTINE,
  GET_ROUTINES,
  GET_ROUTINE,
  ROUTINE_ERROR,
  ADD_EXERCISE,
  DELETE_EXERCISE
} from "./types";

// Create or Update Routine
export const createRoutine = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/routines", formData, config);

    dispatch({ type: CREATE_ROUTINE, payload: res.data });

    dispatch(setAlert("Routines Created", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: ROUTINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete a routine
export const deleteRoutine = id => async dispatch => {
  try {
    await axios.delete(`/api/routines/${id}`);

    dispatch({
      type: DELETE_ROUTINE,
      payload: id
    });

    dispatch(setAlert("Routine Removed", "success"));
  } catch (error) {
    dispatch({
      type: ROUTINE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Get users routines
export const getUserRoutines = () => async dispatch => {
  try {
    const res = await axios.get("/api/routines");

    dispatch({ type: GET_ROUTINES, payload: res.data });
  } catch (err) {
    dispatch({
      type: ROUTINE_ERROR,
      payload: { msg: err.response.data, status: err.response.status }
    });
  }
};

// Get a user routine
export const getUserRoutine = id => async dispatch => {
  try {
    const res = await axios.get(`/api/routines/${id}`);

    dispatch({ type: GET_ROUTINE, payload: res.data });
  } catch (err) {
    dispatch({
      type: ROUTINE_ERROR,
      payload: { msg: err.response.data, status: err.response.status }
    });
  }
};

// Add exercise of a routine
export const addExercise = (id, formData) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.put(
      `/api/routines/exercise/${id}`,
      formData,
      config
    );

    dispatch({
      type: ADD_EXERCISE,
      payload: res.data
    });

    dispatch(setAlert("Exercise Added", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: ROUTINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete exercise of a routine
export const deleteExercise = (routineId, exerciseId) => async dispatch => {
  try {
    await axios.delete(`/api/routines/exercise/${routineId}/${exerciseId}`);

    dispatch({
      type: DELETE_EXERCISE,
      payload: exerciseId
    });

    dispatch(setAlert("Exercise Removed", "success"));
  } catch (error) {
    dispatch({
      type: ROUTINE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
