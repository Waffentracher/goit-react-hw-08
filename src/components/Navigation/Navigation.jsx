import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'; // Підключення CSS файлу

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link} activeClassName={styles.active}>Home</NavLink>
      <NavLink to="/contacts" className={styles.link} activeClassName={styles.active}>Contacts</NavLink>
    </nav>
  );
};

export default Navigation;
