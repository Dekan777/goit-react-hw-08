import { Formik, Field, Form } from 'formik';

const RegisterForm = () => {
  return (
    <div>
      <h1>Contact Us</h1>
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
