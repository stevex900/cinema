import React, { useState, useEffect } from "react";
import { selectReservationItem } from "../../redux/reservation/reservation.selector";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import {
  MainContainer,
  PrimaryContainer,
  MovieListContainer,
  SecondaryContainer,
  TertiaryContainer,
  QuaternaryContainer,
} from "./chooseMovie.styles";
import { NavLinkContainer as NavLink } from "../../components/button/button.styles";
import { text } from "../../text/text";
import Movie from "../../components/movie/Movie";
import { H1, H2, H3, P } from "../../fonts/fonts.styles";
const ChooseMovie = ({ selectedMovie }) => {
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    const API = "https://candidatetest.arpideas.pl/api/Repertoire/Get";
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Unable to download data");
      })
      .then((response) => response.json())
      .then((data) => {
        const movies = [...data];
        setMovieDetails(movies);
      });
  }, []);

  const moviesList = movieDetails.map((movie) => (
    <Movie key={movie.id} {...movie} />
  ));
  return (
    <MainContainer>
      <SecondaryContainer>
        <TertiaryContainer>
          <PrimaryContainer>
            <H1>{text.chooseMovie}</H1>
          </PrimaryContainer>
          <MovieListContainer>{moviesList}</MovieListContainer>
        </TertiaryContainer>
        <QuaternaryContainer>
          {selectedMovie}
          {selectedMovie && (
            <div>
              <NavLink to={"/"}>{text.back}</NavLink>
              <NavLink to={"/place-selection"}>{text.next}</NavLink>
            </div>
          )}
        </QuaternaryContainer>
      </SecondaryContainer>
    </MainContainer>
  );
};
const mapStateToProps = (state) => ({
  selectedMovie: selectReservationItem(state),
});
export default connect(mapStateToProps)(ChooseMovie);
