import React, { Component } from "react";
import "./footerStyle.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="pt-4  pt-md-5 border-top back-grey text-center">
          <div className="row">
            <div className="col-4 col-md-offset-2">
              <h5>Courses</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Random feature
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Team feature
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Another one
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h5>Account</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    My Courses
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Bank Account
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Personal Infarmation
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Locations
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://www.youtube.com/?hl=tr&gl=TR"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
