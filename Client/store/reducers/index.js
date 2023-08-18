import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
  students: studentReducer,
  courses: courseReducer,
});

export default rootReducer;
