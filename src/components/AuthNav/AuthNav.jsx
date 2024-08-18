
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div className={styles.authNav}>
    <NavLink to="/login">Log In</NavLink>
    <NavLink to="/register">Register</NavLink>
  </div>
);

export default AuthNav;
