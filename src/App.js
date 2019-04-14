import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Certifications from "./components/Certifications";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touchscreen: false,
      home: "/",
      gallery: "/gallery",
      certifications: "/certifications"
    };
  }
  componentDidMount() {
    if (window.navigator.maxTouchPoints > 0) {
      this.setState({ touchscreen: true });
    }
  }
  render() {
    const home = this.state.home;
    const gallery = this.state.gallery;
    const certifications = this.state.certifications;

    return (
      <Router>
        <div id="wrapper" style={{ minHeight: "100vh" }}>
          <Header />
          <nav className="black" style={{display: 'flex', justifyContent: 'space-evenly'}} >
          <Link className="white-text" to={gallery}>
            Project Gallery
          </Link>
          <Link className="white-text" to={certifications}>
            Certifications
          </Link></nav>
          <Route exact path={home} component={Home} />
          <Route path={gallery} component={Gallery} />
          <Route path={certifications} component={Certifications} />
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
