import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "../Form";

import "./App.styled.js";
import { Section, SectionTitle, Container } from "./App.styled";
import { onSuccess, onError } from "../Notification/Notification";
const initialState = { contacts: [] };

export default class App extends Component {
  state = initialState;

  addContact = (name, number) => {
    const idCheck = this.state.contacts.find(
      (contact) => name.toLowerCase() === contact.name.toLowerCase()
    );
    const idCheckNumber = this.state.contacts.find(
      (contact) => number === contact.number
    );
    if (idCheck) {
      return onError(`${name}: Такой контакт уже есть`);
    }
    if (idCheckNumber) {
      return onError(`${number}: Такой номер уже есть`);
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    onSuccess(`${name}:Успешно добавлено`);

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  onSubmit = ({ name, number }) => {
    this.addContact(name, number);
  };

  render() {
    return (
      <>
        <Section>
          <SectionTitle>Contact Form</SectionTitle>

          <Container>
            <ContactForm onSubmit={this.onSubmit} />
          </Container>
        </Section>

        <ToastContainer />
      </>
    );
  }
}
