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
          <NavLink to="/goit-react-hw-08-phonebook/">Home</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="goit-react-hw-08-phonebook/contacts">Contacts</NavLink>
          </li>
        )}
      </ul>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </nav>
  );
};

export default Header;
