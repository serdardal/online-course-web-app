import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./loginBox.css";

export class LoginBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Log In /Sign In
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Form className="loginModal">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <span>
              <a
                className="course-a"
                src=""
                href="https://www.youtube.com/?hl=tr&gl=TR"
              >
                Don't have an account
              </a>
            </span>
            <Button className="log-button" variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </Modal>
      </>
    );
  }
}
