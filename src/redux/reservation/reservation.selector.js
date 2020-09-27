import { createSelector } from "reselect";
export const selectReservation = (state) => state.reservation;

export const selectReservationItem = createSelector(
  [selectReservation],
  (reservation) => reservation.selectedMovie
);
export const selectShowingId = createSelector(
  [selectReservation],
  (reservation) => reservation.showingId
);

export const selectSeats = createSelector(
  [selectReservation],
  (reservation) => reservation.seats
);
