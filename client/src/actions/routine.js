import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_ROUTINES,
  GET_ROUTINE,
  ROUTINE_ERROR,
  ADD_EXERCISE
} from "./types";

// Get users routines
export const getUserRoutines = () => async dispatch => {
  try {
    const res = await axios.get("/api/routines");

    dispatch({ type: GET_ROUTINES, payload: res.data });
  } catch (error) {
    dispatch({
      type: ROUTINE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Get a user routine
export const getUserRoutine = id => async dispatch => {
  try {
    const res = await axios.get(`/api/routines/${id}`);

    dispatch({ type: GET_ROUTINE, payload: res.data });
  } catch (error) {
    dispatch({
      type: ROUTINE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Add exercise to the routine
export const addExercise = (id, formData, history) => async dispatch => {
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

    history.push(`/dashboard`);
  } catch (error) {
    dispatch({
      type: ROUTINE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
