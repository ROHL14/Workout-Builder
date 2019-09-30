import {
  GET_ROUTINES,
  GET_ROUTINE,
  ROUTINE_ERROR,
  ADD_EXERCISE
} from "../actions/types";

const INITIAL_STATE = {
  routines: [],
  routine: null,
  loading: true,
  error: {}
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ROUTINES:
      return {
        ...state,
        routines: payload,
        loading: false
      };
    case GET_ROUTINE:
      return {
        ...state,
        routine: payload,
        loading: false
      };
    case ROUTINE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case ADD_EXERCISE:
      return {
        ...state,
        routine: { ...state.routine, exercise: payload }
      };
    default:
      return state;
  }
};
