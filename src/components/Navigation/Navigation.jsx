import UserMenu from '../../components/UserMenu/UserMenu';
// import { NavLink } from 'react-router-dom';
import AuthBar from '../../components/AuthBar/AuthBar';
import { useSelector } from 'react-redux';
import { selectAuthLogin } from '../../redux/auth/selectors';
// import css from './Navigation.module.css';

const Navigation = () => {
  const isLogin = useSelector(selectAuthLogin);

  return <nav>{isLogin ? <UserMenu /> : <AuthBar />}</nav>;
};

export default Navigation;
