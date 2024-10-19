import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
