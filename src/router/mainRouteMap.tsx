import { createHashRouter } from "react-router-dom";
import Login from "../layouts/login";
import PrivateLayout from "../layouts/PrivateLayout";
import routeMap from "../pages/routeMap";



const router = createHashRouter([
  {
    path:'login',
    element:<Login/>
  },
  {
    path: '/',
    element: <PrivateLayout />,
    children: routeMap
  }
])

export default router;