// AuthBar.jsx
import { NavLink, useLocation } from 'react-router-dom';
import { handleClearError } from '../../redux/auth/authSlice';
import css from './AuthBar.module.css'; // Import the module.css file
import { useState } from 'react';

const AuthBar = () => {
  const [active, setActive] = useState(false);

  const location = useLocation();

  const handleToggleLink = () => {
    if (!active) {
      setActive(true);
    }
  };

  return (
    <ul className={css.navAuth}>
      <li className={css.navItem}>
        <NavLink
          to="/login"
          className={`${css.navAuthLink} ${
            active ? css.authActive - active : ''
          }`}
          onClick={() => {
            handleToggleLink();
            handleClearError();
          }}
        >
          Login
        </NavLink>
      </li>
      <li className={css.navItem}>
        <NavLink
          to="/signup"
          className={`${css.navAuthLink} ${
            location.pathname === '/signup' ? css.authActive - active : ''
          }`}
          onClick={() => {
            setActive(false);
            handleClearError();
          }}
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthBar;
