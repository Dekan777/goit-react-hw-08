import { Helmet } from 'react-helmet';
// import RegisterPage from '../components/RegisterPage/RegisterPage';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
