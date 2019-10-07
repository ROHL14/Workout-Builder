import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import googleAuthReducer from "./googleAuthReducer";
import alert from "./alert";
import exercise from "./exercise";
import auth from "./auth";
import routine from "./routine";

export default combineReducers({
  alert,
  auth,
  authGoogle: googleAuthReducer,
  form: formReducer,
  exercise,
  routine
});
