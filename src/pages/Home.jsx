import { Helmet } from 'react-helmet';
import HomePage from '../components/HomePage/HomePage';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomePage />
    </div>
  );
}
