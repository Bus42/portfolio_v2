import React, { Component } from "react";
import smoke from "../Assets/smoke.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Studio42Dev"
    };
  }
  render() {
    return (
      <div
        className="card"
        id="header"
        style={{
          height: "120px",
          backgroundImage: `url(${smoke})`,
          backgroundPosition: "bottom",
          backgroundSize: "101% 101%",
          marginBottom: "2em",
          border: '0 !important'
        }}
      >
        <div className="card-content">
          <div className="card-title">
            <header>
              <h4 style={{
                color: "whitesmoke",
                mixBlendMode: "difference"
              }} >{this.state.name}</h4>
              <p />
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
