import ContactList from '../components/ContactList/ContactList';
import ContactsForm from '../components/ContactsForm/ContactsForm';
import SearchBox from '../components/SearchBox/SearchBox';
import styles from './ContactsPage.module.css'; // Підключення CSS файлу

const ContactsPage = () => {
  return (
    <div className={styles.contactsPage}>
      <h2>Contacts Page</h2>
      <div>
        <ContactList />
      </div>
      <div>
        <ContactsForm />
      </div>
      <div>
        <SearchBox />
      </div>
    </div>
  );
};

export default ContactsPage;
