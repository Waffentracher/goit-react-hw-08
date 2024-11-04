import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/auth/operations'; 
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        resetForm();
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <Field type="email" name="email" placeholder="Email" className={styles.inputField} />
        <Field type="password" name="password" placeholder="Password" className={styles.inputField} />
        <button type="submit" className={styles.button}>Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
