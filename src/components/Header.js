import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Progressive Web Application Development",
      name: "Studio42Dev"
    };
  }
  render() {
    return (
      <div className="card" id="header">
        <div className="card-content">
          <div className="card-title">
            <header>
              <h2>{this.state.name}</h2>
              <small>{this.state.title}</small>
              <p />
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
