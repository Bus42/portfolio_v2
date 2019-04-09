import React, { Component } from "react";
import header_image_right from "../Assets/header_image_right.jpeg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Studio42Dev"
    };
  }
  render() {
    return (
      <div className="card" id="header" style={{height: "120px"}} >
        <img
          src={header_image_right}
          style={{
            height: "120px",
            position: "absolute",
            top: "0",
            right: "0",
            padding: "0 !important",
            margin: "0 !important"
          }}
          alt="header decoration"
        />
        <div className="card-content">
          <div className="card-title">
            <header>
              <h4>{this.state.name}</h4>
              <p />
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
