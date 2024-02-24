import { Formik, Field, Form } from 'formik';

const LoginForm = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field name="pasword" type="text" />
          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
