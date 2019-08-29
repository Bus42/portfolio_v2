import React, { Component } from 'react'

class ImageCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  toggleFullScreen = (e) => {
    const id = e.target.id;
    const active = document.getElementById(id);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      active.requestFullscreen();
    }
  }
  render() {
    // props.card = image, title, content, url
    const card = this.props.card
    const imageStyle = {
      width: '400px',
      maxWidth: '100%'
    }
    return (
      <div id="imageCard" className="card transparent white-text">
        <div className="card-image" style={{ display: 'flex', justifyContent: 'center' }} >
          <img id={card.title} src={card.image} alt={`${card.title} preview`} style={imageStyle} onClick={(e) => { this.toggleFullScreen(e) }} />
        </div>
        <div className="card-content">
          <span className="card-title activator">{card.title}<i className="material-icons right">expand_more</i></span>
        </div>
        <div className="card-reveal grey darken-3">
          <span className="card-title">{card.title}<i className="material-icons right">close</i></span>
          <p>{card.content}</p>
          <button className="waves-effect waves-light btn grey darken-2"><a style={{textDecoration: 'none', color: 'inherit'}} href={card.url} target={card.title}><i className="material-icons right">play_arrow</i>Go to {card.title}</a></button>
        </div>
      </div>
    )
  }
}

export default ImageCard
