import { NavLink } from 'react-router-dom';

const AuthMenu = () => (
  <ul>
    <li>
      <NavLink to="register">Register</NavLink>
    </li>
    <li>
      <NavLink to="login">Login</NavLink>
    </li>
  </ul>
);

export default AuthMenu;
