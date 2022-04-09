import { ContactItem } from '../contactItem/ContactItem';

export const ContactList = ({ allContacts }) => {
  return (
    <ul>
      {allContacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
