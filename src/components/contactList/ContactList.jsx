import { ContactItem } from '../contactItem/ContactItem';
import { Button, BookItem } from './ContactList.styled';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <BookItem key={id}>
          <ContactItem name={name} number={number} />
          <Button type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </Button>
        </BookItem>
      ))}
    </ul>
  );
};
