import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }

  add = (e) => {
    e.preventDefault();

    if (this.state.name === "" || this.state.email === "") {
      alert("All field are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Form className="container m-auto p-3" onSubmit={this.add}>
          <Form.Group className="mb-3">
            <Form.Label> Full Name</Form.Label>
            <Form.Control
              value={this.state.name}
              type="text"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={this.state.email}
              type="email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Contact
          </Button>
        </Form>
      </div>
    );
  }
}
