import { Helmet } from 'react-helmet';
import SignUpPage from '../components/SignUpPage/SignUpPage';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <SignUpPage />
    </div>
  );
}
