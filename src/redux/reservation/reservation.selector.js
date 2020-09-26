import { createSelector } from "reselect";
export const selectReservation = (state) => state.reservation;

export const selectReservationItem = createSelector(
  [selectReservation],
  (reservation) => reservation.selectedMovie
);
