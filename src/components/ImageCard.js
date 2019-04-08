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
      <div className="card grey lighten-2" style={{ width: "350px" }}>
        <div className="card-image">
          <img style={{padding: "8px"}} src={card.src} alt={card.title} />
          <span className="card-title">{card.title}</span>
        </div>
        <div className="card-content">
          <p>{card.content}</p>
        </div>
        <div className="card-action grey lighten-3">
          <a href={card.link} target={card.src}>
            <p>Go to {card.title}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default ImageCard;
