import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import AuthReducer from "../auth/authReducer";

const rootReducer = combineReducers({
  toastr: toastrReducer,
  auth: AuthReducer,
});

export default rootReducer;
