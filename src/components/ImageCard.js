import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    //image, title, content, url
    const card = this.props.card;
    return (
      <div className="card transparent" style={{ width: "250px" }}>
        <a
          className="btn transparent"
          href={card.url}
          target={card.image}
          style={{ fontWeight: "bold" }}
        >
          {card.title}
        </a>
        <div className="card-image">
          <a href={card.url}>
            <img style={{ padding: "8px" }} src={card.image} alt={card.title} />
          </a>
        </div>
        <div className="card-content">
          <p style={{ color: "white" }}>{card.content}</p>
        </div>
      </div>
    );
  }
}

export default ImageCard;
