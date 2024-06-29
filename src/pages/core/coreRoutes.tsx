import { createHashRouter, RouteObject } from 'react-router-dom';
import AboutPage from "./about";
import TermsAndCondition from "./termsandcondition"
import CoreDashboardPage from "./dashboard";


const coreRoutes : RouteObject[] =  [
  {
    path:"dashboard",
    element: <CoreDashboardPage/>
  },
  {
    path:"about",
    element: <AboutPage/>
  },
  {
    path:"termsandcondition",
    element: <TermsAndCondition/>
  },
]

export default coreRoutes;