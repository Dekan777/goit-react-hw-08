import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectAuthLoading } from '../../redux/auth/selectors';
import { signup } from '../../redux/auth/operations';
import RegisterForm from '../RegisterForm/RegisterForm';
// import { OwnSpinner } from '../Spiner/OwnSpinner';

const RegisterPage = () => {
  // const authLoading = useSelector(selectAuthLoading);
  // const authError = useSelector(selectAuthError);

  // const dispatch = useDispatch();

  // const handleSignup = newUser => dispatch(signup(newUser));

  return (
    <div>
      <p>SignUp and we will save your contacts for you.</p>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
