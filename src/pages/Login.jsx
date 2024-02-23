import { Helmet } from 'react-helmet';
import LoginPage from '../components/Login/LoginPage';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginPage />
    </div>
  );
}
