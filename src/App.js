import React, { Component } from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
const spacerHeight = "40px";
const Spacer = () => <div className="row" style={{ height: spacerHeight }} />;
class App extends Component {
  render() {
    return (
      <div>
        <div className="container"><h1 className="white-text">Studio42</h1></div>
        <Intro />
        <Spacer />
        <Contact />
      </div>
    );
  }
}

export default App;
