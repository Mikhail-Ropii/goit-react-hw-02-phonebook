import { Component } from "react/cjs/react.development";
import { nanoid } from "nanoid";
import { Container } from "./phonebook/Phonebook.styled"

export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  
  onChangeName = (evt) => {
    this.setState({
      name: evt.currentTarget.value
    })
  }

  onAddContact = (name) => {
    this.setState(prevState => {
      
    })
  }

  render() {
    const { name } = this.state;
    return (
      <Container>
        <p>Name</p>
        <form action="">
          <input
            onChange={this.onChangeName}
            value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
          />
          <button type="button" onClick={() => this.onAddContact(name)}>Add contact</button>
          </form>
        </Container>
    )
  }
}
