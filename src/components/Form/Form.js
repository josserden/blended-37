import React, { Component } from "react";
import { Form, Input, Label, LabelText, Button } from "../App/App.styled";
import { nameIdInput, numberIdInput } from "../../helpers/helpers";

import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdDriveFileRenameOutline } from "react-icons/md";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
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
    this.props.onSubmit(this.state);
    this.reset();
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
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
              value={name}
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
              value={number}
              onChange={this.onChange}
              placeholder="Enter your tel number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}
