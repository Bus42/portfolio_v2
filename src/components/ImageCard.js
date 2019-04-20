import React, { Component } from 'react'

class ImageCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }
  render (props) {
    // props.card = image, title, content, url
    const card = this.props.card
    const imageCardStyle = {
      width: '300px',
      backgroundImage: `url(${card.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
    return card.content ? (
      <div className='card transparent' style={imageCardStyle}>
        <ul className='collapsible' style={{ border: 'none', color: 'white' }}>
          <li id={card.title}>
            <div
              className='collapsible-header black'
              style={{
                border: 'none',
                opacity: '.85',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <span>{card.title}</span>{' '}
              <span>
                <i className='fas fa-angle-down' />
              </span>
            </div>
            <div
              className='collapsible-body black'
              style={{ border: 'none', opacity: '.85' }}
            >
              <p style={{ color: 'white' }}>{card.content}</p>
              <div className='card-action'>
                <a href={card.url} target={card.title}>
                  <button className='btn grey darken-1'>Try It Out</button>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    ) : (
      <div className='card black'>
        <div className='card-content div card-title'>
          <h5>{card.title}</h5>
        </div>
        <div className='card-image'>
          <img
            id={card.title.replace(/\s/g, '')}
            onClick={e => {
              const id = e.target.id
              if (!document.fullscreenElement) {
                let cert = document.getElementById(id)
                cert.requestFullscreen()
              } else {
                document.exitFullscreen()
              }
            }}
            src={card.image}
            alt={card.title}
          />
        </div>
              <div className='card-action'>
                <a href={card.url} target={card.title}>
                  <button className='btn transparent'>View on <span>{card.provider}</span></button>
                </a>
              </div>
      </div>
    )
  }
}

export default ImageCard
