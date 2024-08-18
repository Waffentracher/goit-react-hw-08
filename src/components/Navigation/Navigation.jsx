// src/components/Navigation/Navigation.jsx
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations'; // Імплементуйте свою функцію logout
import styles from './Navigation.module.css';

const Navigation = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </nav>
  );
};

export default Navigation;
