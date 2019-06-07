import React from "react";
import {Form, } from "semantic-ui-react";

class FlashForm extends React.Component {
  state = {front: " ", back: " "}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  handleSubmit = (e) => {
   e.preventDefault();
   if (this.props.id) {
     this.props.edit({id: this.props.id, ...this.state, })
     this.props.toggleEdit()
   } else {
   this.props.add(this.state);
   };
   this.setState({ front: " ", back: " ", })
}

render() {
  return (
    <Form onSubmit={this.handleSubmit}>
    <Form.Group widths="equal">
    <Form.Input
    fluid
    required
    label="Question"
    placeholder="Enter Question"
    name="front"
    value={this.state.front}
    onChange={this.handleChange}
    />
    <Form.Input
    fluid
    required
    label="Answer"
    placeholder="Enter Answer"
    name="back"
    value={this.state.back}
    onChange={this.handleChange}
    />
    <Form.Button color="green">Submit</Form.Button>
    </Form.Group>
    </Form>
  )
 }
}
export default FlashForm;