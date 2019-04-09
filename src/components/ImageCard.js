import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    //image, title, content, url
    const card = this.props.card;
    return (
      <div className="card transparent" style={{ width: "250px" }}>
        {card.title ? (
          <p style={{ padding: "1em" }} className="white-text">
            {card.title}
          </p>
        ) : null}
        <div className="card-image">
          <a href={card.url}>
            <img
              style={{ padding: "8px" }}
              src={card.image}
              alt={card.title || "#"}
            />
          </a>
        </div>
        {card.content ? (
          <ul
            className="collapsible transparent"
            style={{ border: "none", color: "white" }}
          >
            <li id={card.title} >
              <div
                className="collapsible-header transparent"
                style={{ border: "none" }}
              >
                <i className="far fa-eye" /> <small>Details</small>
              </div>
              <div
                className="collapsible-body transparent"
                style={{ border: "none" }}
              >
                <p style={{ color: "white" }}>{card.content}</p>
              </div>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default ImageCard;
