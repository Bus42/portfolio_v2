import React, { Component } from "react";

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
            logo: <i className="fab fa-free-code-camp"></i>
        },
        {
            name: " linkedIn",
            url: "https://www.linkedin.com/in/gregbrewton/",
            logo: <i className="fab fa-linkedin"></i>
        }
      ]
    };
  }
  render() {
    return (
      <div
        className="card"
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly"
        }}
      >
        {this.state.contacts.map((contact, index) => (
          <span
            className="contact"
            /** <-- use class of 'contact' for responsive styling in App.css */ key={
              index
            }
          >
            <a style={{ color: "inherit" }} href={contact.url}>
              {contact.logo}
              {contact.name}
            </a>
          </span>
        ))}
      </div>
    );
  }
}

export default Contact;
