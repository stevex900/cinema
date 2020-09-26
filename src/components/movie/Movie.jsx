import React from "react";
import { connect } from "react-redux";
import {
  chooseMovieAction,
  selectedMovieNameAction,
} from "../../redux/reservation/reservation.actions";
import {
  MainContainer,
  ItemContainer,
  Container,
  Title,
  Categories,
  CategoriesContainer,
} from "./movie.styles";
import { P, H2 } from "../../fonts/fonts.styles";
import { Button } from "../../components/button/button.styles";
import { text } from "../../text/text";
const Movie = ({
  id,
  title,
  categories,
  ageLimit,
  duration,
  chooseMovieAction,
  selectedMovieNameAction,
}) => {
  const handleGet = () => {
    chooseMovieAction(id.toString());
    selectedMovieNameAction(title);
  };
  const categoriesList = categories.map((categorie) => <P cat>{categorie}</P>);
  return (
    <MainContainer>
      <Title>
        <H2>{title}</H2>
      </Title>
      <Container>
        <CategoriesContainer>
          <Categories>
            <ItemContainer>{categoriesList}</ItemContainer>
            <ItemContainer>
              {ageLimit && (
                <P>
                  {text.space}
                  {text.age}
                  {ageLimit}
                </P>
              )}
            </ItemContainer>
            <ItemContainer>
              <P>
                {text.space}
                {duration}
                {text.duration}
              </P>
            </ItemContainer>
          </Categories>
        </CategoriesContainer>

        <Button onClick={handleGet}>Wybierz</Button>
      </Container>
    </MainContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  chooseMovieAction: (item) => dispatch(chooseMovieAction(item)),
  selectedMovieNameAction: (item) => dispatch(selectedMovieNameAction(item)),
});
export default connect(null, mapDispatchToProps)(Movie);
