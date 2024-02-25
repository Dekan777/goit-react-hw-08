import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';
import { Formik, Field, Form } from 'formik';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      signup({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <div className={css.registerFormContainer}>
      <p className={css.signUpMessage}>
        SignUp and we will save your contacts for you.
      </p>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" id="name" className={css.input} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" id="email" className={css.input} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              id="password"
              className={css.input}
            />
          </div>

          <button type="submit" className={css.submitButton}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
