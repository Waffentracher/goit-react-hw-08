import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css'; 

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login</h2>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field className={styles.formField} type="email" name="email" placeholder="Email" />
          <Field className={styles.formField} type="password" name="password" placeholder="Password" />
          <button className={styles.formButton} type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
