import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
export const NavLinkContainer = styled(NavLink)`
  display: inline-block;
  min-width: 100px;
  min-height: 50px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 50px;
  &:hover {
    background-color: gray;
  }
  ${({ start }) =>
    start &&
    css`
      min-width: 1000px;
      min-height: 500px;
    `}
`;
export const Button = styled.button``;
