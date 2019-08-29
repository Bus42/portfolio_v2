import React from "react";
import shades from "../Assets/shades.jpg";

const introStyle = {
  color: "white",
  mixBlendMode: "difference",
  fontFamily: "Ubuntu"
};
const imgStyle = {
  width: "120px",
  shapeOutside: "circle()",
  float: "left",
  position: "relative",
  right: "8px"
};

const Home = () => (
  <div style={introStyle}>
    <p>
      <img
        className="circle"
        style={imgStyle}
        src={shades}
        alt="Me in cheap Aviator shades"
      />
      My name is Greg Brewton and I am Studio42 Web Development. I combine
      website and application design with business logic and function to achieve a
      user-facing product. I specialize in creating fast, secure, and easy to use
      websites and Progressive Web Applications.
    </p>
    <p>
      I do not do this with website builders. I create custom solutions that provide
      exactly the functionality you need and none of the extraneous code you
      don't.
    </p>
    <p>
      Whether it's a simple website to
      showcase a group or event or a Progressive Web Application that can
      be downloaded to your Android or IOS device - your application will be
      fast, reliable, responsive, user-friendly and modern.
    </p>
  </div>
);

export default Home;
