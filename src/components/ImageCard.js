import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    //src, title, content, link
    const card = this.props.preview;
    return (
      <div className="card transparent" style={{ width: "350px" }}>
        <a
          className="btn transparent"
          href={card.link}
          target={card.src}
          style={{ fontWeight: "bold" }}
        >
          {card.title}
        </a>
        <div className="card-image">
          <img style={{ padding: "8px" }} src={card.src} alt={card.title} />
        </div>
        <div className="card-content">
          <p style={{ color: "white" }}>{card.content}</p>
        </div>
      </div>
    );
  }
}

export default ImageCard;
