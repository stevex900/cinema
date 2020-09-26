import React from "react";
import Start from "./pages/start/Start";
import ChooseMovie from "./pages/chooseMovie/ChooseMovie";
import PlaceSelection from "./pages/placeSelection/PlaceSelection";
import "./App.css";
import { Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Route exact path="/" component={Start} />
      <Route path="/choose-movie" component={ChooseMovie} />
      <Route path="/place-selection" component={PlaceSelection} />
    </div>
  );
};

export default App;
