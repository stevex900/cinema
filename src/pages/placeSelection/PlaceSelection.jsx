import React, { useEffect, useState } from "react";
import CinemaHall from "../../components/cinema-hall/CinemaHall";
import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertriaryContainer,
  Row,
  Seats,
} from "./placeSelection.styles";
const PlaceSelection = () => {
  const [place, setPlace] = useState([]);
  useEffect(() => {
    const API =
      "https://candidatetest.arpideas.pl/api/Reservation/GetSeatsStatus/{showingId}";
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Unable to download data");
      })
      .then((response) => response.json())
      .then((data) => {
        const places = [...data];
        setPlace(places);
      });
  }, []);
  const handleGet = () => {
    // console.log(place);
  };
  const cinemaHall = place.map((item) => <CinemaHall {...item} />);
  return (
    <MainContainer onClick={handleGet}>
      <PrimaryContainer>{cinemaHall}</PrimaryContainer>
    </MainContainer>
  );
};

export default PlaceSelection;
