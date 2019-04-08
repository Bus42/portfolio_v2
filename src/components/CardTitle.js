import React, { Component } from "react";

class CardTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Progressive Web Application Developer",
      name: "Greg Brewton"
    };
  }
  render() {
    return (
      <div className="card-title">
        <header>
          <h2>{this.state.name}</h2>
          <small>{this.state.title}</small>
          <p />
        </header>
      </div>
    );
  }
}

export default CardTitle;
