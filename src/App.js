import React, { Component } from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="white-text">Studio42</h1>
        <Intro />
        <Contact />
      </div>
    );
  }
}

export default App;
