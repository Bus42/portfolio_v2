import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    //props.card = image, title, content, url
    const card = this.props.card;
    const imageCardStyle = {
      width: "300px",
      backgroundImage: `url(${card.image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    };
    return (
      <div className="card transparent" style={imageCardStyle}>
        {card.content ? (
          <ul
            className="collapsible"
            style={{ border: "none", color: "white" }}
          >
            <li id={card.title}>
              <div
                className="collapsible-header black"
                style={{ border: "none", opacity: ".75", width: "100%" }}
              >
                {card.title}
              </div>
              <div
                className="collapsible-body black"
                style={{ border: "none", opacity: ".75" }}
              >
                <p style={{ color: "white" }}>{card.content}</p>
                <div className="card-action">
                  <a href={card.url} target={card.title}>
                    <button className="btn grey darken-1">Try It Out</button>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default ImageCard;
