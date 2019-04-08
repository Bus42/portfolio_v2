import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Intro />
        <Gallery />
      </div>
    );
  }
}

export default App;
