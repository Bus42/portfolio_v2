import React, { Component } from "react";
import "./App.css";
import CardTitle from "./components/CardTitle";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <CardTitle />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
