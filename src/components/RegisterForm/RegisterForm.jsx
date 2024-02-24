import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectAuthLoading } from '../../redux/auth/selectors';
import { signup } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

import { Formik, Field, Form } from 'formik';
// import { OwnSpinner } from '../Spiner/OwnSpinner';

// const authLoading = useSelector(selectAuthLoading);
// const authError = useSelector(selectAuthError);

// const dispatch = useDispatch();

// const handleSignup = newUser => dispatch(signup(newUser));

const RegisterForm = () => {
  return (
    <div>
      <p>SignUp and we will save your contacts for you.</p>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" id="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" id="password" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
