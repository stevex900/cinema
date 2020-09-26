import React from "react";

import { NavLinkContainer as NavLink } from "../../components/button/button.styles";
const Start = () => {
  return (
    <NavLink start to={"/choose-movie"}>
      Rozpocznij
    </NavLink>
  );
};

export default Start;
