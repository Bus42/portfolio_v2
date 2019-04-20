import React, { Component } from "react";
import ImageCard from "./ImageCard";
import M from "materialize-css";
const respWebDes = require("../Assets/responsive-web-design.png")
const jsAlgs = require("../Assets/javascript-algorithms-and-data-structures.png");
const frontEnd = require("../Assets/front-end-development.png");

class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certifications: [
        {
          title: "Responsive Web Design",
          image: respWebDes,
          url:
            "https://www.freecodecamp.org/certification/bus42/responsive-web-design",
          provider: "freeCodeCamp"
        },
        {
          title: "Javascript Algorithms and Data Structures",
          image: jsAlgs,
          url:
            "https://www.freecodecamp.org/certification/bus42/javascript-algorithms-and-data-structures",
          provider: "freeCodeCamp"
        },
        {
          title: "Front End Development",
          image: frontEnd,
          url:
            "https://www.freecodecamp.org/certification/bus42/legacy-front-end",
          provider: "freeCodeCamp"
        }
      ],
      appearHome: true
    };
  }

  componentDidMount() {
    M.AutoInit();
    if (window.navigator.maxTouchPoints > 0) {
      this.setState({ touchscreen: true });
    }
  }
  componentDidUpdate() {
    console.log("Certifications component updated");
    M.AutoInit();
  }
  render() {
    return this.state.touchscreen ? (
      <div className="carousel carousel-slider center">
        {this.state.certifications.map((cert, index)=>{
          return (
            <div className="carousel-item black white-text"
              key={index}
              style={{display: "flex", justifyContent: "center"}}
            >
            <ImageCard card={cert} />
            </div>
          )
        })}
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly"
        }}
      >
        {this.state.certifications.map((cert, index) => {
          return (
            <div
              id={cert.title}
              className="card black container"
              key={index}
              style={{ width: "350px" }}
            >
              <div className="card-image">
                <img
                  onClick={() => {
                    const active = document.getElementById(`${cert.title}`);
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    } else {
                      active.requestFullscreen();
                    }
                  }}
                  style={{ cursor: "pointer" }}
                  src={cert.image}
                  alt={cert.title}
                />
                <span className="card-title" />
              </div>
              <div className="card-action black center">
                <a href={cert.url}><button className="btn transparent" ><span className="linkText">View on {cert.provider}</span></button></a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Certifications;
