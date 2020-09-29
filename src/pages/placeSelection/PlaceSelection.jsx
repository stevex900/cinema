import React, { useEffect, useState } from "react";
import CinemaHall from "../../components/cinema-hall/CinemaHall";
import {
  selectShowingId,
  selectSeats,
  selectReservationItem,
} from "../../redux/reservation/reservation.selector";
import { connect } from "react-redux";
import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertriaryContainer,
  Row,
  Seats,
} from "./placeSelection.styles";
import {
  NavLinkContainer as NavLink,
  Button,
} from "../../components/button/button.styles";
import { text } from "../../text/text";
const PlaceSelection = ({ showingId, seats, selectedMovie }) => {
  const [place, setPlace] = useState([]);
  const [token, setToken] = useState("asdasd");
  const [payment, setPayment] = useState();
  useEffect(() => {
    if (showingId) {
      const APIGet = `https://candidatetest.arpideas.pl/api/Reservation/GetSeatsStatus/${showingId}`;
      fetch(APIGet)
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
    }
  }, []);

  const newPost = {
    showingId: showingId,
    seats: [
      {
        row: seats.row,
        seatNumber: seats.seatNumber,
      },
    ],
  };
  const newPayment = {
    reservationToken: token,
  };
  const handleReserve = () => {
    const APIPost =
      "https://candidatetest.arpideas.pl/api/Reservation/ReserveSeats";
    fetch(APIPost, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Unable to download data");
      })
      .then((response) => response.json())
      .then((data) => {
        const token = data;
        setToken(token);
        console.log("Token: ", token);
      });
  };
  const handlePayment = () => {
    const APIPost =
      // "https://candidatetest.arpideas.pl/api/Payment/PayForReservations";
      "https://candidatetest.arpideas.pl/api/Reservation/ReserveSeats";
    fetch(APIPost, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPayment),
    })
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Unable to download data");
      })
      .then((response) => response.json())
      .then((data) => {
        const paymentInfo = data;
        setPayment(payment);
        console.log("payment response", paymentInfo);
      });
  };
  const handleTest = () => {
    console.log(token);
  };
  const cinemaHall = place.map((item) => <CinemaHall {...item} />);
  return (
    <MainContainer>
      <PrimaryContainer>{cinemaHall}</PrimaryContainer>
      <Button onClick={handleReserve}>{text.reservePlace}</Button>
      <Button onClick={handlePayment}>{text.pay}</Button>
      <Button onClick={handleTest}>Test</Button>
      <NavLink to={"/choose-movie"}>{text.back}</NavLink>
      <NavLink to={"/"}>{text.next}</NavLink>
    </MainContainer>
  );
};
const mapStateToProps = (state) => ({
  showingId: selectShowingId(state),
  seats: selectSeats(state),
  selectedMovie: selectReservationItem(state),
});
export default connect(mapStateToProps)(PlaceSelection);
