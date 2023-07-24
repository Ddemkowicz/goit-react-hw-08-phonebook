import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const LimitedRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn } = useAuth();
  const isNotLogged = !isLoggedIn;
  return isNotLogged ? <Navigate to={redirectTo} /> : Component;
};

export default LimitedRoute;
