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
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.label}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field name="name" type="text" id="name" />
        </div>

        <div className={css.label}>
          <label htmlFor="email" className={css.label}>
            Email
          </label>
          <Field name="email" type="email" id="email" />
        </div>

        <div className={css.label}>
          <label htmlFor="password" className={css.label}>
            Password
          </label>
          <Field name="password" type="password" id="password" />
        </div>

        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
