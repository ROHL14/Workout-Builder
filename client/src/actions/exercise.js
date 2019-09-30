import axios from "axios";
import { GET_EXERCISES, EXERCISE_ERROR } from "./types";

export const getExercises = () => async dispatch => {
  try {
    const res = await axios.get("/api/exercises");

    dispatch({
      type: GET_EXERCISES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: EXERCISE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
