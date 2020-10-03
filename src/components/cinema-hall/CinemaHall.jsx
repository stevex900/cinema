import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLinkContainer as NavLink } from "../../components/button/button.styles";
import { text } from "../../text/text";
import { selectReservationItem } from "../../redux/reservation/reservation.selector";
import { placeSelectionAction } from "../../redux/reservation/reservation.actions";
import { Icon } from "semantic-ui-react";
import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertriaryContainer,
  Row,
  Seats,
  SeatsContainer,
} from "./cinemaHall.styles";
const CinemaHall = ({ row, seats, placeSelectionAction }) => {
  const [active, setActive] = useState(true);

  const handleChoosePlace = (bindValue, e) => {
    const summary = {
      row: row * 1 + 1,
      seatNumber: parseInt(e.target.getAttribute("data-index") * 1 + 1),
    };
    if (bindValue === 0) {
      placeSelectionAction(summary);

      setActive(!active);
    } else if (bindValue === 1) {
    }
  };
  const color = (bindValue, index, e) => {
    if (bindValue === 1) {
      return "red";
    }
    if (bindValue === 0) {
      return "green";
    }
    // if (index === parseInt(e.target.getAttribute("data-index"))) {
    //   return "blue";
    // }
  };
  const seatItem = seats.map((item, index) => (
    <SeatsContainer>
      <Icon
        key={index}
        data-index={index}
        onClick={handleChoosePlace.bind(this, item)}
        color={color(item, index)}
        name="square full"
      />
    </SeatsContainer>
    // <SeatsContainer>
    //   {item === 1 ? (
    //     <Seats
    //       key={index}
    //       data-index={index}
    //       onClick={handleChoosePlace.bind(this, item)}
    //       red
    //     ></Seats>
    //   ) : (
    //     <Seats
    //       key={index}
    //       data-index={index}
    //       green={active}
    //       blue={active === false}
    //       onClick={handleChoosePlace.bind(this, item)}
    //     ></Seats>
    //   )}
    // </SeatsContainer>
  ));
  return (
    <MainContainer>
      <Row>{seatItem}</Row>
    </MainContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  placeSelectionAction: (item) => dispatch(placeSelectionAction(item)),
});
export default connect(null, mapDispatchToProps)(CinemaHall);
