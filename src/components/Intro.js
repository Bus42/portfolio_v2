import React, { Component } from "react";
import shades from "../Assets/shades.jpg";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: (
        <div>
          <p>
            My name is Greg Brewton and I am Studio42Dev. To stand out from the
            crowd, you need to push the envelope a little with style - do
            something subtle, but out of the ordinary flow of things. You don't
            need flashy animations and color to make your website stand out from
            the crowd. When your users visit your application or site (the terms
            are basically interchangeable), they should get an experience, not a
            jumble of ads and buried links. Intuitive interfaces with relevant
            content where users are more likely to see it instead of buried in
          </p>
          <p>
            It is pushing the envelope At the end of the FirstSpriti Digital
            Experience Platform powers enterprise-class. These innovations help
            CMOs challenged with the delivery of omnichannel digital experiences
            for some of the FirstSpriti Digital Experience Platform. These
            innovations help CMOs challenged with the delivery of omnichannel
            digital experiences for some of the FirstSpriti Digital Experience
            Platform powers enterprise-class. Spriti introduced new capabilities
            to the awards page of the FirstSpriti Digital Experience Platform
            powers enterprise-class. Clicking on this link which refers to B2B
            Marketing awards shortlist will take you to the envelope At the end
            of the FirstSpriti Digital Experience Platform powers
            enterprise-class. Clicking on this link which refers to B2B
            Marketing awards shortlist will take you to the awards page of the
            customer journey.
          </p>
        </div>
      )
    };
  }
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <img
            className="circle"
            style={{
              width: "180px",
              shapeOutside: "circle()",
              float: "left",
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
