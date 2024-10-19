import { useSelector, useDispatch } from 'react-redux';
import { selectContactsLoading, selectContactsError, selectFilteredContacts } from '../../redux/contacts/slice';
import { deleteContact } from '../../redux/contacts/operations'; 
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <Contact contact={{ ...contact, id: Number(contact.id) }} />
          <button
            onClick={() => dispatch(deleteContact(contact.id))}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;