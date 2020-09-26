import React, { useState } from "react";
import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertriaryContainer,
  Row,
  Seats,
  SeatsContainer,
} from "./cinemaHall.styles";
const CinemaHall = ({ row, seats }) => {
  const [choose, setChoose] = useState(false);

  const handleChoosePlace = (bindValue, e) => {
    if (bindValue === 0) {
      console.log("wolne miejsce");
    } else if (bindValue === 1) {
      console.log("zajete miejsce");
    }
    console.log("Rząd " + row);

    console.log("Miejsce numer: " + e.target.getAttribute("data-index"));
  };
  const i = (e) => {};
  const seatItem = seats.map((item, index) => (
    <SeatsContainer>
      {item === 1 ? (
        <Seats
          key={index}
          data-index={index}
          onClick={handleChoosePlace.bind(this, item)}
          red
        >
          {/* {seats} */}
        </Seats>
      ) : (
        <Seats
          key={index}
          data-index={index}
          green
          onClick={handleChoosePlace.bind(this, item)}
        ></Seats>
      )}
    </SeatsContainer>
  ));
  return (
    <MainContainer>
      <Row>{seatItem}</Row>
    </MainContainer>
  );
};

export default CinemaHall;
