import { Helmet } from 'react-helmet';
import ContactList from '../components/ContactList/ContactList';

export default function Contacs() {
  return (
    <>
      <Helmet>
        <title>Your contacs</title>
      </Helmet>

      <ContactList />
    </>
  );
}
