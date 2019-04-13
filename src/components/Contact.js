import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
                <span className="hide-on-med-only">{contact.logo}</span>{" "}
                <span className="hide-on-small-only">{contact.name}</span>
              </span>
            </a>
          </span>
        ))}
        <Router>
          <Link className="white-text" to="/gallery">
            <span>
              <i className="far fa-clone hide-on-med-only" />{" "}
              <span className="hide-on-small-only">Project Gallery</span>{" "}
            </span>
          </Link>
          <Link className="white-text" to="/certifications">
            <span>
              <i className="fas fa-certificate hide-on-med-only" />{" "}
              <span className="hide-on-small-only">Certifications</span>{" "}
            </span>
          </Link>
        </Router>
      </div>
    );
  }
}

export default Contact;
