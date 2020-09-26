import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
export const NavLinkContainer = styled(NavLink)``;
export const MainContainer = styled.div``;
export const PrimaryContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SecondaryContainer = styled.div``;
export const TertriaryContainer = styled.div``;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SeatsContainer = styled.div``;
export const Seats = styled.div`
  background-color: white;
  border: 2px solid black;
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  ${({ green }) =>
    green &&
    css`
      background-color: green;
    `}
  ${({ red }) =>
    red &&
    css`
      background-color: red;
    `}
`;
