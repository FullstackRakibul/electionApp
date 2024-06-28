import { RouteObject } from "react-router-dom";
import CoreIndex from "./core";
import coreRoutesMap from "./core/coreRoutes"
import GuestPage from "./guest";
import NotFoundPage from "./404";
import PollingAgents from "./pollingAgents";

const AudutRouteMaps : Array<RouteObject>=[

  {
    path:"/audit/polling-agents",
    element: <PollingAgents/>
  }
]

export default AudutRouteMaps;