import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class EditContact extends Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.delate;
    this.state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();

    if (this.state.name === "" || this.state.email === "") {
      alert("All field are mandatory");
      return;
    }
    this.props.updateContactHandler(this.state);

    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Form className="container m-auto p-3" onSubmit={this.update}>
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
            Update
          </Button>
        </Form>
      </div>
    );
  }
}
