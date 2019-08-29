import React from "react";
import { contacts } from "./contactList";

const Footer = () => (
  <div
    className="white-text"
    style={{
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-evenly",
      width: "100%",
      padding: "1em 0"
    }}
  >
    {contacts.map((entry, index) => (
      <span key={index}>
        <a
          className="linkText"
          title={`Image of and link to ${entry.name}`}
          style={{ color: "inherit" }}
          href={entry.url}
          target={entry.name}
        >
          <span>
            <span className="fa-lg hide-on-med-only">{entry.logo}</span>{" "}
            <span className="hide-on-small-only">{entry.name}</span>
          </span>
        </a>
      </span>
    ))}
  </div>
);

export default Footer;
