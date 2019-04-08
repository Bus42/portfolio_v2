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
          <img style={{ padding: "8px" }} src={card.src} alt={card.title} />
        </div>
        <div className="card-content">
          <p>{card.content}</p>
        </div>
        <div className="card-action grey lighten-3">
          <a
            className="waves-effect waves-light btn orange darken-2"
            href={card.link}
            target={card.src}
            style={{fontWeight: 'bold'}}
          >
            {card.title}
          </a>
        </div>
      </div>
    );
  }
}

export default ImageCard;
