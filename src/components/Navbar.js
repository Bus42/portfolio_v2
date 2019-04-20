import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  linkStyle = {
    margin: "1em 3em"
  };
  render() {
    const gallery = "/gallery";
    const certifications = "/certifications";
    return (
      <nav
        className="black"
        style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "flex-end" }}
      >
        <NavLink style={this.linkStyle} className="white-text" to={gallery}>
          Projects
        </NavLink>
        <NavLink
          style={this.linkStyle}
          className="white-text"
          to={certifications}
        >
          Certifications
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
