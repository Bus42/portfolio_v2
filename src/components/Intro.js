import React, { Component } from "react";
import shades from "../Assets/shades.jpg";

class Intro extends Component {
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
        <div className="container black">
          <img
            style={{
              width: "120px",
              shapeOutside: "circle()",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
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
            When your users visit your application or site they should get an experience, not a
            jumble of ads and buried links. User Interfaces with relevant
            content where users are more likely to see it instead of buried in a
            sea of side content provide the kind of user experience that keeps
            them engaged.
          </p>
        </div>
    );
  }
}

export default Intro;
