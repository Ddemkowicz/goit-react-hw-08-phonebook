import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/operations';
import useAuth from '../../hooks/useAuth';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
