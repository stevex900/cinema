import { combineReducers } from "redux";
import { reservationReducer } from "../redux/reservation/reservation.reducer";

export default combineReducers({
  reservation: reservationReducer,
});
