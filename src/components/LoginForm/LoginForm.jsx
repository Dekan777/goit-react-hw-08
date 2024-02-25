import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { resetForm }) => {
          dispatch(login(values));
          resetForm();
        }}
      >
        <Form className={css.login_form}>
          <div className={css.label}>
            <label htmlFor="email" className={css.label}>
              Email:
            </label>
            <Field
              className={css.login_form_input}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className={css.label}>
            <label htmlFor="password" className={css.label}>
              Password:
            </label>
            <Field
              className={css.login_form_input}
              type="password"
              id="password"
              name="password"
              required
            />
          </div>

          <div>
            <button className={css.btn} type="submit">
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
