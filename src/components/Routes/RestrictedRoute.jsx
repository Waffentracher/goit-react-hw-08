import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

RestrictedRoute.propTypes = {
  Component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;
