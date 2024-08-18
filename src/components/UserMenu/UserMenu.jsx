
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div className={styles.userMenu}>
      <p>Welcome, {userName}</p>
      <button onClick={() => dispatch(logout())}>Log Out</button>
    </div>
  );
};

export default UserMenu;
