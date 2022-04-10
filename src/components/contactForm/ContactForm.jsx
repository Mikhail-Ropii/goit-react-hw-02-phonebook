import styled from '@emotion/styled';
import { Button, Label } from './ContactForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const ErrorMessageStyle = styled(ErrorMessage)`
  position: absolute;
  top: 20px;
`;

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

  const notify = () => toast('Wow so easy!');

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onHandleSubmit}
    >
      <FormStyle>
        <Label htmlFor="name">
          Name
          <ErrorMessageStyle name="name" component="div" />
          <Field type="text" name="name" id="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <ErrorMessageStyle name="number" component="div" />
          <Field type="text" name="number" id="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyle>
    </Formik>
  );
};
