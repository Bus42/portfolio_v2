import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Certifications from "./components/Certifications";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

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
          <Navbar />
          <div
            className="container"
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "center"
            }}
          >
            <Switch>
              <Route exact path={home} component={Home} />
              <Route path={gallery} component={Gallery} />
              <Route path={certifications} component={Certifications} />
            </Switch>
          </div>
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
