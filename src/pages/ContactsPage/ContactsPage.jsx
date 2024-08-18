import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts, selectContactsLoading } from '../../redux/contacts/selectors';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Your Contacts</h1>
      {isLoading && <p className={styles.loading}>Loading...</p>}
      <ul className={styles['contacts-list']}>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}: {contact.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
