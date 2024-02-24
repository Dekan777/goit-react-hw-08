import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectAuthLoading } from '../../redux/auth/selectors';
import { signup } from '../../redux/auth/operations';

import { Formik, Field, Form } from 'formik';
// import { OwnSpinner } from '../Spiner/OwnSpinner';

const RegisterForm = () => {
  // const authLoading = useSelector(selectAuthLoading);
  // const authError = useSelector(selectAuthError);

  // const dispatch = useDispatch();

  // const handleSignup = newUser => dispatch(signup(newUser));

  return (
    <div>
      <p>SignUp and we will save your contacts for you.</p>
      <Formik
        initialValues={{ name: '', email: '', pasword: '' }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <Field name="pasword" type="text" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
