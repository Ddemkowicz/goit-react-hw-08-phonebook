import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
        )}
      </ul>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </nav>
  );
};

export default Header;
