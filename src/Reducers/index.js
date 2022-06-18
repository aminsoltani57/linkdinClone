import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  articleReducer: articleReducer,
});
export default rootReducer;
