import { GET_EXERCISES, EXERCISE_ERROR } from "../actions/types";

const INITIAL_STATE = {
  exercises: [],
  loading: true,
  error: {}
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_EXERCISES:
      return {
        ...state,
        exercises: payload,
        loading: false
      };
    case EXERCISE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};
