import { createHashRouter } from "react-router-dom";
import Login from "../layouts/login";
import PrivateLayout from "../layouts/PrivateLayout";
import coreRoutes from "../pages/core/coreRoutes";
import auditRoutes from "../pages/audit/auditRouteMap";
import NotFoundPage from "../pages/404";



const router = createHashRouter([
  {
    path:'login',
    element:<Login/>
  },
  {
    path: '/',
    element: <PrivateLayout />,
    children: [
      {
        path: 'core',
        children: coreRoutes
      },
      {
        path: 'audit',
        children: auditRoutes
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

export default router;