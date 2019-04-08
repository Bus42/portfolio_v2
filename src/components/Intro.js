import React, { Component } from "react";
import shades from "../Assets/shades.jpg";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting:
        "It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform powers enterprise-class. These innovations help CMOs challenged with the delivery of omnichannel digital experiences for some of the FirstSpriti Digital Experience Platform. These innovations help CMOs challenged with the delivery of omnichannel digital experiences for some of the FirstSpriti Digital Experience Platform powers enterprise-class. Spriti introduced new capabilities to the awards page of the FirstSpriti Digital Experience Platform powers enterprise-class. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the FirstSpriti Digital Experience Platform powers enterprise-class. Spriti introduced new capabilities to the awards page of the FirstSpriti Digital Experience Platform powers enterprise-class. It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform powers enterprise-class. Helping marketers serve unmatched cross-phase personalized experiences at every step of the FirstSpriti Digital Experience Platform. Helping marketers serve unmatched cross-phase personalized experiences at every step of the FirstSpriti Digital Experience Platform. It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform powers enterprise-class. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the customer journey."
    };
  }
  render() {
    return (
      <div className="card">
        <div className="card-content" >
          <img
          className="circle"
            style={{
              width: "180px",
              shapeOutside: "circle()",
              float: 'left',
              padding: "8px"
            }}
            src={shades}
            alt="Me in cheap Aviator shades"
          />
          {this.state.greeting}
        </div>
      </div>
    );
  }
}

export default Intro;
