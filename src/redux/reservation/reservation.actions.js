import { ActionTypes } from "./reservation.types";
export const chooseMovieAction = (item) => ({
  type: ActionTypes.CHOOSE_MOVIE,
  payload: item,
});
export const placeSelectionAction = (item) => ({
  type: ActionTypes.PLACE_SELECTION,
  payload: item,
});
export const selectedMovieNameAction = (item) => ({
  type: ActionTypes.SELECTED_MOVIE,
  payload: item,
});
