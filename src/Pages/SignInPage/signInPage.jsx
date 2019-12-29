import React, { Component } from "react";
import SignInForm from "./Components/signInForm";

class SignPage extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">From this page you can register</h1>
        <SignInForm />
      </div>
    );
  }
}
export default SignPage;
