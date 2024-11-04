import PropTypes from 'prop-types';
import AppBar from './AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node, 
};

export default Layout;
