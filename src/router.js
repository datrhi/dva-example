import React from "react";
import { Router, Route, Switch } from "dva/router";
import StudentRoute from "./routes/StudentRoute";
import AuthRoute from "./routes/AuthRoute";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={StudentRoute} />
        <Route path="/login" exact component={AuthRoute} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
