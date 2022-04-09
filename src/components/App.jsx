import { Component } from 'react/cjs/react.development';
import { nanoid } from 'nanoid';
import { Container, Title, ContcTitle } from './Phonebook.styled';
import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(5),
      name: values.name,
      number: values.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    resetForm();
    console.log(this.state.contacts);
  };

  results = '';

  onChangeFilter = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
    const allContacts = this.state.contacts;
    const filterValue = this.state.filter;
    this.results = allContacts.filter(contact => {
      return contact.name.toLowerCase().startsWith(filterValue.toLowerCase());
    });
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onHandleSubmit={this.handleSubmit} />
        <ContcTitle>Contacts</ContcTitle>
        <Filter
          filter={this.state.filter}
          onChangeFilter={this.onChangeFilter}
        />
        <ContactList allContacts={this.state.contacts} />
        {this.results !== '' && <ContactList allContacts={this.results} />}
      </Container>
    );
  }
}
