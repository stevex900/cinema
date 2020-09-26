import { ActionTypes } from "./reservation.types";

const INITIAL_STATE = {
  showingId: "string",
  seats: [
    {
      row: 0,
      seatNumber: 0,
    },
  ],
  selectedMovie: "",
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
    default:
      return state;
  }
};
