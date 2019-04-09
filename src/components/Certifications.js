import React, { Component } from "react";
import ImageCard from "./ImageCard";

class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certifications: [
        {
          image: require("../Assets/responsive-web-design.png"),
          url:
            "https://www.freecodecamp.org/certification/bus42/responsive-web-design"
        },
        {
          image: require("../Assets/javascript-algorithms-and-data-structures.png"),
          url:
            "https://www.freecodecamp.org/certification/bus42/javascript-algorithms-and-data-structures"
        },
        {
          image: require("../Assets/front-end-development.png"),
          url:
            "https://www.freecodecamp.org/certification/bus42/legacy-front-end"
        }
      ]
    };
  }
  render() {
    return (
      <div className="row" style={{ display: "flex", marginTop: "2em", flexFlow: "row wrap", justifyContent: "space-evenly" }}>
        {this.state.certifications.map((certification, index) => {
          return <ImageCard key={index} card={certification} />;
        })}
      </div>
    );
  }
}

export default Certifications;
