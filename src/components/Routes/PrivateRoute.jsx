import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ Component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  Component: PropTypes.elementType.isRequired,  
  redirectTo: PropTypes.string.isRequired,
};

export default PrivateRoute;
