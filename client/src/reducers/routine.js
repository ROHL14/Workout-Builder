import {
  CREATE_ROUTINE,
  DELETE_ROUTINE,
  GET_ROUTINES,
  GET_ROUTINE,
  ROUTINE_ERROR,
  ADD_EXERCISE,
  DELETE_EXERCISE
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
    case CREATE_ROUTINE:
    case GET_ROUTINE:
      return {
        ...state,
        routine: payload,
        loading: false
      };
    case DELETE_ROUTINE:
      return {
        ...state,
        routines: state.routines.filter(routine => routine._id !== payload),
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
    case DELETE_EXERCISE:
      return {
        ...state,
        routine: {
          ...state.routine,
          exercise: state.routine.exercise.filter(item => item._id !== payload)
        },
        loading: false
      };
    default:
      return state;
  }
};
