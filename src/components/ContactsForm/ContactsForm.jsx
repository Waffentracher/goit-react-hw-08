import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOps';
import styles from './ContactsForm.module.css';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNumberChange = e => {
    const onlyNumbers = e.target.value.replace(/\D/g, '');
    setNumber(onlyNumbers);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) return;
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="text"
          value={number}
          onChange={handleNumberChange}
          className={styles.input}
          pattern="[0-9]*"
          title="Please enter a valid phone number"
          required
        />
      </label>
      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
};

export default ContactsForm;
