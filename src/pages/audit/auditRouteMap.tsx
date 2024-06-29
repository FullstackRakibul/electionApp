import { RouteObject } from "react-router-dom";
import PollingAgents from "./pollingAgents";

const auditRoutes: RouteObject[] = [

  {
    path:"/audit/polling-agents",
    element: <PollingAgents/>
  }
]

export default auditRoutes;