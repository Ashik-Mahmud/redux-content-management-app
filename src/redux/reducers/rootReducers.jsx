import { combineReducers } from "redux";
import blogReducer from "./BlogReducer";

const rootReducer = combineReducers({
  blogReducer: blogReducer,
});

export default rootReducer;
