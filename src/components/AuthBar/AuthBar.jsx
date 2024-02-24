import { NavLink, useLocation } from 'react-router-dom';
import { handleClearError } from '../../redux/auth/authSlice';
import './AuthBar.css';
import { useState } from 'react';

const AuthBar = () => {
  const [active, setActive] = useState(false); // Изменено на false, так как по умолчанию ничто не активно

  const location = useLocation();

  const handleToggleLink = () => {
    // Изменено условие, чтобы активный класс не изменялся при загрузке
    if (!active) {
      setActive(true);
    }
  };

  return (
    <ul className="nav_auth">
      <li className="nav_auth-link-item">
        <NavLink
          to="/login"
          className={`nav_auth-link ${active ? 'auth_is-active' : ''}`}
          onClick={() => {
            handleToggleLink();
            handleClearError();
          }}
        >
          Login
        </NavLink>
      </li>
      <li className="nav_auth-link-item">
        <NavLink
          to="/signup"
          className={`nav_auth-link ${
            location.pathname === '/signup' ? 'auth_is-active' : ''
          }`}
          onClick={() => {
            // Обнуляем состояние active при клике на Register
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
