import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
