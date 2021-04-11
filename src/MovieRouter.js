  
import React from "react";
import { Route, Switch } from "react-router";
import App from "./App";
import Description from "./components/Description";

const MovieRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/description/:id" component={Description} />
    </Switch>
  );
};

export default MovieRouter;