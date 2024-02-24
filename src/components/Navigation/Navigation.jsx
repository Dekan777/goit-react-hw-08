import UserMenu from '../../components/UserMenu/UserMenu';
import AuthBar from '../../components/AuthBar/AuthBar';
import { useSelector } from 'react-redux';
import { selectAuthLogin } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLogin = useSelector(selectAuthLogin);

  return <nav>{isLogin ? <UserMenu /> : <AuthBar />}</nav>;
};

export default Navigation;
