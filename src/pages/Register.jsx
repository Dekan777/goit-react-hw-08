import { Helmet } from 'react-helmet';
import RegisterPage from '../components/Register/RegisterPage';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterPage />
    </div>
  );
}
