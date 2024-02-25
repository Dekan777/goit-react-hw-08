import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  const logOut = () => dispatch(logout());

  return (
    <div className={css.nav}>
      <div className={css.navLink}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="contacts" className={css.link}>
          Contacts
        </NavLink>
      </div>
      <div className={css.log}>
        <p className={css.nameUser}>{user && user.name}</p>
        <button onClick={logOut} className={css.btn}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
