import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";
import "./navbar.css";
import LoginBox from "../LoginBox/loginBox";
import { connect } from "react-redux";

import { search } from "../../../store/Actions/courseActions";

class PageNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBarText: ""
    };

    this.handleSearchBarInputEvent = this.handleSearchBarInputEvent.bind(this);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
  }

  handleSearchBarInputEvent(event) {
    const value = event.target.value;
    this.setState({
      searchBarText: value
    });
    console.log(value)
  }

  handleSearchButtonClick(event) {
    this.props.search(this.state.searchBarText);
    console.log("basıldı!")
  }

  render() {
    return (
      <div>
        <Navbar bg="light fixed" expand="lg">
          <Navbar.Brand className="logo" href="">
            Online Course Platform
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#dersler">Courses</Nav.Link>
            </Nav>
            <div>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={this.handleSearchBarInputEvent}
                />
                <Button
                  variant="outline-success"
                  style={{ marginRight: 10 }}
                  onClick={this.handleSearchButtonClick}
                >
                  Search
                </Button>
              </Form>
            </div>

            {this.props.currentUser !== "" && (
              <NavDropdown
                className="fixed-right"
                title="My Account"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  My Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Bank Account
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Personal Information
                </NavDropdown.Item>
              </NavDropdown>
            )}

            <LoginBox />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.userReducer.currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    search: text => dispatch(search(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNavbar);
