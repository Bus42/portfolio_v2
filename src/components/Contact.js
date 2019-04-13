import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Gallery from "./Gallery";
import Certifications from "./Certifications";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: " github",
          url: "https://github.com/bus42",
          logo: <i className="fab fa-github" />
        },
        {
          name: " freeCodeCamp",
          url: "https://www.freecodecamp.org/bus42",
          logo: <i className="fab fa-free-code-camp" />
        },
        {
          name: " linkedIn",
          url: "https://www.linkedin.com/in/gregbrewton/",
          logo: <i className="fab fa-linkedin" />
        }
      ]
    };
  }
  render() {
    const gallery = "/gallery";
    const certifications = "/certifications";
    return (
      <div
        className="card transparent white-text"
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly"
        }}
      >
        {this.state.contacts.map((contact, index) => (
          <span key={index}>
            <a style={{ color: "inherit" }} href={contact.url}>
              <span>
                <span className="fa-lg hide-on-med-only">{contact.logo}</span>{" "}
                <span className="hide-on-small-only">{contact.name}</span>
              </span>
            </a>
          </span>
        ))}
        <Router>
          <NavLink className="white-text" to={gallery}>
            <span>
              <i className="far fa-lg fa-clone hide-on-med-only" />{" "}
              <span className="hide-on-small-only">Project Gallery</span>
            </span>
          </NavLink>
          <NavLink className="white-text" to={certifications}>
            <span>
              <i className="fas fa-lg fa-certificate hide-on-med-only" />{" "}
              <span className="hide-on-small-only">Certifications</span>
            </span>
          </NavLink>
          <Route exact path={gallery} component={Gallery} />
          <Route exact path={certifications} component={Certifications} />
        </Router>
      </div>
    );
  }
}

export default Contact;
