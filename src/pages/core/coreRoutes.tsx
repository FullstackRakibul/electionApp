import AboutPage from "./about";
import TermsAndCondition from "./termsandcondition"
import CoreDashboardPage from "./dashboard";


const coreRoutes = [
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