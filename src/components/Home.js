import React, { Component } from "react";
import shades from "../Assets/shades.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  introStyle = {
    color: "white",
    mixBlendMode: "difference"
  };
  render() {
    return (
      <div>
        <img
          style={{
            width: "120px",
            shapeOutside: "circle()",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            float: "left",
            position: "relative",
            right: "8px"
          }}
          src={shades}
          alt="Me in cheap Aviator shades"
        />
        <p style={this.introStyle}>
          To stand out from the crowd you need to push the envelope a little
          with style. Do something subtle but out of the ordinary flow of
          things. You don't need flashy animations and colors to make your
          website stand out.
        </p>
        <p style={this.introStyle}>
          I create fast and responsive web applications. Whether it's a simple
          website to showcase a group or event or a full-fledged Progressive Web
          Application for your business - your application should be fast,
          reliable, user-friendly and modern.
        </p>
      </div>
    );
  }
}

export default Home;
