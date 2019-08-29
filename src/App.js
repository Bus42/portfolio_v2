import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { certifications } from "./components/certificationList";
import { projects } from "./components/projectList";
const App = () => {
  return (
    <div
      id="app-wrapper"
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
        minHeight: "100vh"
      }}
    >
      <Router>
        <div>
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
              <Route exact path="/" component={Home} />
              <Route
                path="/projects"
                render={props => <Gallery list={projects} />}
              />
              <Route
                path="/certifications"
                render={props => <Gallery list={certifications} />}
              />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};
export default App;
