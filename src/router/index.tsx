import React from "react";
// Here goes Routing
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "../styles.scss";
import RouteComponent from "./Route";
import { IRoutes, routes } from "./routes";

const RouteApp: React.FC = () => (
  <Router>
    <Switch>
      {routes.map((route: IRoutes) => {
        return (
          <RouteComponent
            exact={route.exact}
            key={route.id}
            path={route.path}
            route={route}
          />
        );
      })}
    </Switch>
  </Router>
);

export default RouteApp;
