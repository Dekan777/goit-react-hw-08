import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

import { IconContext } from 'react-icons';
import { IoClose } from 'react-icons/io5';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);
  console.log('selectVisibleContacts', selectVisibleContacts);

  const handleRemoveContact = contactId => dispatch(deleteContact(contactId));

  return (
    <div className={css.containerAll}>
      {filteredContacts.map(({ name, phone, id }) => (
        <div className={css.container} key={id}>
          <div className={css.pConteiner}>
            <p className={css.pItem}>
              <FaUserAlt className={css.myIcon} />
              {name}
            </p>
            <p className={css.par}>
              <FaPhoneAlt className={css.myIcon} />
              {phone}
            </p>
          </div>

          <button
            className={css.button}
            onClick={() => handleRemoveContact(id)}
          >
            <IconContext.Provider value={{ size: '2em' }}>
              <IoClose />
            </IconContext.Provider>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
