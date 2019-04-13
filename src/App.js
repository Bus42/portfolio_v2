import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Certifications from "./components/Certifications";

class App extends Component {

  setActive = node => {
    const active = node;
    this.setState({ active });
  };
  render() {
    const gallery = "/gallery";
    const certifications = "/certifications";
    return (
      <Router>
        <div className="container">
          <Header />
          <Intro />
          <Contact />
          <div className="route">
            <Route path={gallery} component={Gallery} />
            <Route path={certifications} component={Certifications} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
