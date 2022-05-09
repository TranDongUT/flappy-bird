import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import birdReducer from "./birdReducer";
import pipeReducer from "./pipeReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  bird: birdReducer,
  pipe: pipeReducer,
});

export default rootReducer;
