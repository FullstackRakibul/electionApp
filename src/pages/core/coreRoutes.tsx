import { RouteObject } from 'react-router-dom';
import CoreDashboardPage from "./dashboard";
import FirstAppriser from './count/firstAppriser';
import SecondAppriser from './count/secondAppriser';


const coreRoutes : RouteObject[] =  [
  {
    path:"dashboard",
    element: <CoreDashboardPage/>
  },
  {
    path:"fisrt-appriser",
    element: <FirstAppriser/>
  },
  {
    path:"second-appriser",
    element: <SecondAppriser/>
  },
]

export default coreRoutes;