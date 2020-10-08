import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { IRoutes } from "./routes";

interface IProps {
  exact?: boolean;
  path: string;
  route: IRoutes;
}

const RouteComponent = ({
  path,
  route,
  exact = false,
}: IProps): JSX.Element => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps): JSX.Element => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

export default RouteComponent;
