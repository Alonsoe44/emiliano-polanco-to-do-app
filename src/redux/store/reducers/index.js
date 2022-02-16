import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";

const rootReducer = combineReducers({
  toDos: toDoReducer,
});

export default rootReducer;
