import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Studio42" };
  }
  render() {
    return (
      <header
        className="container white-text"
        style={{ padding: "10px 2em", fontFamily: "var(--header-font)" }}
      >
        <NavLink to="/">
          <h4 style={{ fontWeight: "bold", color: "white" }}>
            <span>Studio</span><span style={{color: "var(--active-color)"}} >42 </span>
            <small>
              <h5 className="shake-red" style={{ display: "inline", fontFamily: 'var(--primary-font)' }}>
                <span className="hide-on-med-and-down">Progressive </span>
                <span className="hide-on-small-only">Web </span>
                <span className="hide-on-med-and-down">Application </span>
                Dev<span className="hide-on-small-only">elopment</span>
              </h5>
            </small>
          </h4>
        </NavLink>
      </header>
    );
  }
}

export default Header;
