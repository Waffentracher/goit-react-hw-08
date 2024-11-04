import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        resetForm();
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, 'Name must be at least 5 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema} 
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <Field type="text" name="name" placeholder="Name" className={styles.inputField} />
        <ErrorMessage name="name" component="div" className={styles.error} />
        
        <Field type="email" name="email" placeholder="Email" className={styles.inputField} />
        <ErrorMessage name="email" component="div" className={styles.error} />

        <Field type="password" name="password" placeholder="Password" className={styles.inputField} />
        <ErrorMessage name="password" component="div" className={styles.error} />

        <button type="submit" className={styles.button}>Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

