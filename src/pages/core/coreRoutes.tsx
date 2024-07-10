import { RouteObject } from 'react-router-dom';
import UserManagement from "./User/index";
import TermsAndCondition from "./termsandcondition"
import CoreDashboardPage from "./dashboard";


const coreRoutes : RouteObject[] =  [
  {
    path:"dashboard",
    element: <CoreDashboardPage/>
  },
  {
    path:"UserManagement",
    element: <UserManagement/>
  },
  {
    path:"termsandcondition",
    element: <TermsAndCondition/>
  },
]

export default coreRoutes;