import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import "./App.styled.js";
import {
  Section,
  SectionTitle,
  Form,
  Input,
  Label,
  LabelText,
  Container,
  Button,
} from "./App.styled";
import { onSuccess, onError } from "../Notification/Notification";
import { nameIdInput, numberIdInput } from "../../helpers/helpers";

import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdDriveFileRenameOutline } from "react-icons/md";

const initialState = { contacts: [] };

export default class App extends Component {
  state = initialState;

  addContact = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  onChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    this.addContact(name, number);
    onSuccess("Your add your contact!");

    this.reset();
  };

  render() {
    return (
      <>
        <Section>
          <SectionTitle>Contact Form</SectionTitle>

          <Container>
            <Form onSubmit={this.onSubmit}>
              <Label htmlFor={nameIdInput}>
                <LabelText>
                  <MdDriveFileRenameOutline />
                  Your name
                </LabelText>
                <Input
                  id={nameIdInput}
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  placeholder="Enter your name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </Label>

              <Label htmlFor={numberIdInput}>
                <LabelText>
                  <BsFillTelephoneForwardFill /> Your tel
                </LabelText>
                <Input
                  id={numberIdInput}
                  type="tel"
                  name="number"
                  value={this.state.number}
                  onChange={this.onChange}
                  placeholder="Enter your tel number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </Label>

              <Button type="submit">Add contact</Button>
            </Form>
          </Container>
        </Section>

        <ToastContainer />
      </>
    );
  }
}
