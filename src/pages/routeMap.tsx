import { RouteObject } from "react-router-dom";
import CoreIndex from "./core";
import coreRoutes from "./core/coreRoutes"
import GuestPage from "./guest";
import NotFoundPage from "./404";

const routeMap: Array<RouteObject> = [
  {
    path: "/",
    element: <GuestPage />,
  },
  {
    path: "core",
    element: <CoreIndex />,
    children: coreRoutes
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routeMap;