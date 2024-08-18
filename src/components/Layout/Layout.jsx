import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import styles from './Layout.module.css'; // Переконайтесь, що стилі існують

const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Використовуйте ваш Redux стейт

  return (
    <div className={styles.layout}>
      {isLoggedIn ? <Navigation /> : <AuthNav />}
      <main>
        <Outlet /> {/* Рендерить дочірні маршрути */}
      </main>
    </div>
  );
};

export default Layout;
