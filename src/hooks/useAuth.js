import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectAuthError,
} from 'redux/auth/selectors';

const useAuth = () => {
  const authError = useSelector(selectAuthError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    authError,
    isLoggedIn,
    isRefreshing,
    user,
  };
};

export default useAuth;
