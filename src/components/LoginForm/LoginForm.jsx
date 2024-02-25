import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { resetForm }) => {
          // Dispatch the login action here
          dispatch(login(values));

          // Reset the form after submission
          resetForm();
        }}
      >
        <Form className="login_form">
          <div className="login_form-item">
            <label htmlFor="email">Email:</label>
            <Field
              className="login_form-input"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="login_form-item">
            <label htmlFor="password">Password:</label>
            <Field
              className="login_form-input"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>

          <div className="login_form-item">
            <button className="login_form-btn" type="submit">
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
