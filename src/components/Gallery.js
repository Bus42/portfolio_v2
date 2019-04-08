import React, { Component } from "react";
import ImageCard from "./ImageCard";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previews: [
        {
          src: require("../Assets/JS_Calculator.png"),
          title: "Javascript Calculator",
          content:
            "This calculator was built as a part of my curriculum in FreeCodeCamp. It was created using vanilla JS and plain CSS",
          link: "https://bus42.github.io/JSCalculator/"
        },
        {
          src: require("../Assets/JSclock.png"),
          title: "Javascript Clock",
          content:
            "An internet clock built with plain 'ol CSS and JS",
          link: "https://bus42.github.io/JSClock/"
        },
        {
          src: require("../Assets/magic_counter.png"),
          title: "Magic Counter",
          content: "This is the second version of this app that I have built. I wanted an app that functioned natively on mobile devices and could be packaged for mobile app stores on all platforms. The first counter app I made was built with Angular, but React seemed to be a better fit for the purposes of this particular iteration. Counter42 utilizes Google and Facebook analytics and uses Firebase for authentication and database integration. You can change your name and background and create an account to keep track of wins and losses as well as your chosen customizations. Additional damage types may be selected as well.",
          link: "https://counter42.studio42dev.com/"
        }
      ]
    };
  }

  render() {
        const galleryStyle = {
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-evenly",
            alignItems: "center"
        }
    return (
      <div className="card grey lighten-3" style={galleryStyle} >
        {this.state.previews.map((preview, index) => {
          return <ImageCard preview={preview} key={index} />;
        })}
      </div>
    );
  }
}

export default Gallery;
