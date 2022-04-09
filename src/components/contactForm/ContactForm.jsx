import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export const ContactForm = ({ onHandleSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup.string('Incorrect name').required('Type your name'),
    number: yup
      .number('Incorrect number')
      .required('Type your number')
      .positive('Incorrect number')
      .integer('Incorrect number'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onHandleSubmit}
    >
      <Form>
        <label htmlFor="name">
          Name
          <ErrorMessage name="name" component="div" />
          <Field type="text" name="name" id="name" />
        </label>
        <label htmlFor="number">
          Number
          <ErrorMessage name="number" component="div" />
          <Field type="text" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
