import { About, Home } from "@pages";
import React from "react";

export interface IRoutes {
  path: string;
  exact?: boolean;
  id: string;
  component: React.FC<any>;
  routes?: IRoutes[];
}

export const routes: IRoutes[] = [
  {
    path: "/",
    component: Home,
    id: "home",
    exact: true,
  },
  {
    path: "/about",
    component: About,
    id: "home",
    exact: true,
  },
];