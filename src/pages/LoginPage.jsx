
import LoginForm from '../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css'; // Підключення CSS файлу

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <h2>Login Page</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;