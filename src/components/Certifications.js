import React, { Component } from "react";

class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certifications: [
        {
          title: "Responsive Web Design",
          image: require("../Assets/responsive-web-design.png"),
          url:
            "https://www.freecodecamp.org/certification/bus42/responsive-web-design",
            provider: "freeCodeCamp"
        },
        {
          title: "Javascript Algorithms and Data Structures",
          image: require("../Assets/javascript-algorithms-and-data-structures.png"),
          url:
            "https://www.freecodecamp.org/certification/bus42/javascript-algorithms-and-data-structures",
            provider: "freeCodeCamp"
        },
        {
          title: "Front End Development",
          image: require("../Assets/front-end-development.png"),
          url:
            "https://www.freecodecamp.org/certification/bus42/legacy-front-end",
            provider: "freeCodeCamp"
        }
      ]
    };
  }
  render() {
    return (
      <div className="container"
      style={{
        marginTop: "24px",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center"
      }}
      >
        {this.state.certifications.map((cert, index) => {
          return (
            <div id={cert.title} className="container" key={index} >
              <div className="card-image">
                <img src={cert.image} alt={cert.title} />
                <span className="card-title" />
              </div>
              <div className="card-action black"><a href={cert.url}>View on {cert.provider}</a>
              <button className="btn-floating black right" ><i onClick={(e) => {
                document.getElementById(`${cert.title}`).requestFullscreen();
              }} class="fas fa-expand"></i></button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Certifications;
