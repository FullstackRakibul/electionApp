import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "./MainLayout";

const PrivateLayout = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default PrivateLayout
