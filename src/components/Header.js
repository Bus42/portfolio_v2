import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Studio42" };
  }
  render() {
    return (
      <header className="container white-text">
        <h4>
          {this.state.title}{" "}
          <small>
            <span className="hide-on-small-only">
              <span className="hide-on-med-and-down">Progressive </span>Web{" "}
              <span className="hide-on-med-and-down">Application </span>
              Development
            </span>
          </small>
        </h4>
      </header>
    );
  }
}

export default Header;
