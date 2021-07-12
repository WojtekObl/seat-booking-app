import nextToReducer from "./nextTo.js";
import seatsDemandReducer from "./seatsDemand";
import seatsStatusReducer from "./seatsStatus";
import freeSeatsReducer from "./freeSeats";
import stageReducer from './stage'
import reservationReducer from './reservation'
import { combineReducers } from "redux";

const allReducers = combineReducers({
  nextTo: nextToReducer,
  seatsDemand: seatsDemandReducer,
  seatsStatus: seatsStatusReducer,
  freeSeats: freeSeatsReducer,
  stage: stageReducer,
  reservation: reservationReducer,
});

export default allReducers;
