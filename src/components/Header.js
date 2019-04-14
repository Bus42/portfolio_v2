import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Studio42" };
  }
  render() {
    return (
      <header className="container white-text" style={{padding: "10px 2em"}}>
        <NavLink to="/"><h4 className="white-text">
          {this.state.title}{" "}
          <small>
            <span className="hide-on-small-only">
              <span className="hide-on-med-and-down">Progressive </span>Web{" "}
              <span className="hide-on-med-and-down">Application </span>
              Development
            </span>
          </small>
        </h4></NavLink>
      </header>
    );
  }
}

export default Header;
