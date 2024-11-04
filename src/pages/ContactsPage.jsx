import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectContacts, selectContactsLoading, selectContactsError } from '../redux/contacts/selectors';
import ContactList from '../components/ContactList/ContactList';
import ContactsForm from '../components/ContactsForm/ContactsForm';
import SearchBox from '../components/SearchBox/SearchBox';
import styles from './ContactsPage.module.css'; 

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactsPage}>
      <h2>Contacts Page</h2>

      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Error loading contacts: {error}</p>}

      <div>
        <ContactsForm />
      </div>
      
      <div>
        <SearchBox />
      </div>

      <div>
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
};

export default ContactsPage;
