import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Phonebook from '../../components/Phonebook/Phonebook';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    dispatch(addContact({ name, number }));
    resetForm();
  };

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.number) {
      errors.number = 'Number is required';
    }

    return errors;
  };

  return (
    <div className={css.cont}>
      <Phonebook text="Phonebook" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        <Form className={css.classForm}>
          <div className={css.fieldContainer}>
            <div className={css.errorContainer}>
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>
            <Field
              type="text"
              name="name"
              placeholder="Username"
              style={{
                backgroundColor: 'white',
                color: 'black',
              }}
            />
          </div>
          <div className={css.fieldContainer}>
            <div className={css.errorContainer}>
              <ErrorMessage
                name="number"
                component="div"
                className={css.error}
              />
            </div>
            <Field
              type="text"
              name="number"
              placeholder="Number"
              style={{
                backgroundColor: 'white',
                color: 'black',
              }}
            />
          </div>
          <div className={css.messageContainer}></div>
          <button className={css.classBtn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactForm;
