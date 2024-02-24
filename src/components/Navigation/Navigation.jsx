import UserMenu from '../../components/UserMenu/UserMenu';
import AuthBar from '../../components/AuthBar/AuthBar';
import { useSelector } from 'react-redux';
import { selectAuthLogin } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLogin = useSelector(selectAuthLogin);
  console.log(isLogin);
  return (
    // <nav className="navbar_menu">{isLogin ? <UserMenu /> : <AuthBar />}</nav>
    <nav>{isLogin ? <UserMenu /> : <AuthBar />}</nav>
  );
};

export default Navigation;
