import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
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
      <div
        id="wrapper"
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "space-between",
          minHeight: "100vh"
        }}
      >
        <Router>
          <div id="wrapper">
            <Header />
            <Navbar />
            <div
              className="container"
              style={{
                paddingTop: "5em",
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
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;
