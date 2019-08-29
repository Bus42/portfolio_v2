import React from 'react';
import { toggleFullScreen } from './toggleFullScreen';

const ImageCard = (props) => {
  // props.card = image, title, content, url
  const imgStyle = { width: '400px', maxWidth: '100%' }
  const buttonStyle = { textDecoration: 'none', color: 'inherit' }
  const actionIcon = 'material-icons left';
  const closeIconStyle = {position: 'absolute', bottom: '25px', left: '25px'}
  return (
    <div id="imageCard" className="card transparent white-text">
      <div className="card-image" style={{ display: 'flex', justifyContent: 'center' }} >
        <img id={props.card.title} src={props.card.image} alt={`${props.card.title} preview`} style={imgStyle} onClick={(e) => { 
          const id = e.target.id;
          toggleFullScreen(id) 
          }} />
      </div>
      <div className="card-content">
        <span className="card-title activator">{props.card.title}<i className={actionIcon}>expand_more</i></span>
      </div>
      <div className="card-reveal grey darken-3">
        <span className="card-title">{props.card.title}<i className={actionIcon} style={closeIconStyle}>close</i></span>
        <p>{props.card.content}</p>
        <button className="waves-effect waves-light btn grey darken-2"><a style={buttonStyle} href={props.card.url} target={props.card.title}><i className="material-icons right">play_arrow</i>Go to {props.card.title}</a></button>
      </div>
    </div>
  )
}
export default ImageCard