import React, { Component } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Intro />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default App;
