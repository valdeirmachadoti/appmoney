import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Dashboard from "../dashboard/dashboard";
import Ciclopagamentos from "../cicloPagamento/cicloPagamento";
import Pendencia from "../pendencias/pendencia";

export default (props) => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/ciclopagamentos" component={Ciclopagamentos} />
    <Route exact path="/pendencias" component={Pendencia} />
    <Redirect from="*" to="/" />
  </Switch>
);
