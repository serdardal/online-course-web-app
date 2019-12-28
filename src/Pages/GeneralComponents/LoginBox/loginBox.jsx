import React, { Component } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "./loginBox.css";
import { login, logout } from "../../../store/Actions/userActions";
import { connect } from "react-redux";

class LoginBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      userId: "",
      userPassword: ""
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleIdInputEvent = this.handleIdInputEvent.bind(this);
    this.handlePasswordInputEvent = this.handlePasswordInputEvent.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleIdInputEvent(event) {
    let value = event.target.value;
    this.setState({
      userId: value
    });
  }

  handlePasswordInputEvent(event) {
    let value = event.target.value;
    this.setState({
      userPassword: value
    });
  }

  handleLogin() {
    this.props.login(this.state.userId, this.state.userPassword);

    this.setState({
      show: false
    });
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <>
        {this.props.currentUser === "" ? (
          <Button variant="primary" onClick={this.handleShow}>
            Log In /Sign In
          </Button>
        ) : (
          <Button variant="danger" onClick={this.handleLogout}>
            Log Out
          </Button>
        )}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Form className="loginModal">
            <Form.Group controlId="formBasicEmail">
              <Form.Text className="text-muted">{this.state.error}</Form.Text>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.handleIdInputEvent}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.handlePasswordInputEvent}
              />
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
            <Button
              className="log-button"
              variant="primary"
              onClick={this.handleLogin}
            >
              Log In
            </Button>
          </Form>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userReducer.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(login(username, password)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);
