
import ContactList from '../components/ContactList/ContactList';
import ContactsForm from '../components/ContactsForm/ContactsForm';
import SearchBox from '../components/SearchBox/SearchBox';

const ContactsPage = () => {
  return (
    <div>
      <h2>Contacts Page</h2>
      <ContactList />
      <ContactsForm />
      <SearchBox />
    </div>
  );
};

export default ContactsPage;
