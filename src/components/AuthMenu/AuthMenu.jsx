import { NavLink } from 'react-router-dom';

const AuthMenu = () => (
  <ul>
    <li>
      <NavLink to="goit-react-hw-08-phonebook/register">Register</NavLink>
    </li>
    <li>
      <NavLink to="goit-react-hw-08-phonebook/login">Login</NavLink>
    </li>
  </ul>
);

export default AuthMenu;
