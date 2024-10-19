
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css'; // Підключення CSS файлу

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={styles.form}> 
        <h2 className={styles.formTitle}>Registration</h2>
        <Field type="text" name="name" placeholder="Name" className={styles.inputField} />
        <Field type="email" name="email" placeholder="Email" className={styles.inputField} />
        <Field type="password" name="password" placeholder="Password" className={styles.inputField} />
        <button type="submit" className={styles.button}>Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
