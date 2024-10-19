import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.css'; 
const RegistrationPage = () => {
  return (
    <div className={styles.registrationPage}>
      <h2 className={styles.title}>Registration Page</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
