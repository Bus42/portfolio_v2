import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
  margin: "1em 3em"
};

const Navbar = () => (
  <nav
    className="black container"
    style={{
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "flex-end"
    }}
  >
    <NavLink className="shake-blue" style={linkStyle} to="/projects">
      Projects
    </NavLink>
    <NavLink className="shake-blue" style={linkStyle} to="/certifications">
      Certifications
    </NavLink>
  </nav>
);

export default Navbar;
