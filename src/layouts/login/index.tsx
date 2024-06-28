import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', '123456');
    navigate('/core/dashboard');
  };
  return (
    <> 
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login