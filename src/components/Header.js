import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header
    className="container white-text"
    style={{ padding: "10px 2em", fontFamily: "var(--header-font)" }}
  >
    <NavLink to="/">
      <h4 style={{color: "white" }}>
        <span>Studio</span>
        <span style={{ color: "var(--active-color)" }}>42 </span>
        <small style={{fontSize: '.6em'}}>
          <span
            className="shake-red"
            style={{ display: "inline", fontFamily: "var(--primary-font)" }}
          >
            <span className="hide-on-med-and-down">Progressive </span>
            <span className="hide-on-small-only">Web </span>
            <span className="hide-on-med-and-down">Application </span>
            Dev<span className="hide-on-small-only">elopment</span>
          </span>
        </small>
      </h4>
    </NavLink>
  </header>
);

export default Header;
