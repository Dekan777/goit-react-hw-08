import { Helmet } from 'react-helmet';
// import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Contacs() {
  return (
    <>
      <Helmet>
        <title>Your contacs</title>
      </Helmet>

      <ContactForm />
    </>
  );
}
