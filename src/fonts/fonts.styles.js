import styled, { css } from "styled-components";
export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const P = styled.p`
  ${({ cat }) =>
    cat &&
    css`
      margin-right: 5px;
    `}
`;
