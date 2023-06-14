import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import todoReducer from "./todoReducer";

export default combineReducers({
  sampleReducer: sampleReducer,
  todo: todoReducer,
  post: todoReducer,
});
