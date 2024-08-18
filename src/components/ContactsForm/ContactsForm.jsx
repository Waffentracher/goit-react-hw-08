
import PropTypes from 'prop-types'; // Додайте це
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ContactsForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      number: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </label>
      <label htmlFor="number">
        Number
        <input
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        {formik.errors.number ? <div>{formik.errors.number}</div> : null}
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
