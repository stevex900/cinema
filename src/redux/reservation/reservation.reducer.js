import { ActionTypes } from "./reservation.types";

const INITIAL_STATE = {
  showingId: "",
  seats: "",
  selectedMovie: "",
  initialSeats: "",
};

export const reservationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CHOOSE_MOVIE:
      return {
        ...state,
        showingId: action.payload,
      };
    case ActionTypes.SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case ActionTypes.PLACE_SELECTION:
      return {
        ...state,
        seats: [...state.seats, action.payload],
      };
    default:
      return state;
  }
};
