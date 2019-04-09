import React, { Component } from "react";
import ImageCard from "./ImageCard";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previews: [
        {
          image: require("../Assets/JS_Calculator.png"),
          title: "Javascript Calculator",
          content:
            "This calculator was built as a part of my curriculum in FreeCodeCamp. It was created using vanilla JS and plain CSS",
          url: "https://bus42.github.io/JSCalculator/"
        },
        {
          image: require("../Assets/JSclock.png"),
          title: "Javascript Clock",
          content: "An internet clock built with plain 'ol CSS and JS",
          url: "https://bus42.github.io/JSClock/"
        },
        {
          image: require("../Assets/magic_counter.png"),
          title: "Magic Counter",
          content:
            "Counter42 utilizes Google and Facebook analytics and uses Firebase for authentication and database integration. You can change your name, upload your background, select additional damage types, and create an account to keep track of everything including wins and losses.",
          url: "https://counter42.studio42dev.com/"
        },
        {
          image: require("../Assets/twitcher.png"),
          title: "Twitcher",
          content:
            "Built as part of the FreeCodeCamp curriculum, this app displays a list of frequent Twitch.tv users, shows number of views and followers for each, if they are currently streaming, and their avatars using the Twitch.tv API. The app also has a feature which lets you search for other Twitch.tv users. This app uses jQuery and Bootstrap and is hosted with Firebase.",
          url: "https://twitcher-c1978.firebaseapp.com/"
        },
        {
          image: require("../Assets/simon.png"),
          title: "Simon (clone)",
          content:
            "Play the classic Simon game! You can play in strict mode as well, where you lose if you get it wrong once. In regular mode you have three chances to match the pattern each time a button is added to the pattern. Get it right 20 rounds in a row and you win the game.",
          url: "https://bus42.github.io/simonClone/"
        },
        {
          image: require("../Assets/tictactoe.png"),
          title: "Tic Tac Wars",
          content:
            "It's the classic game of Tic-Tac-Toe. Choose your team and beat the computer. It will beat you if you let it, and try to keep you from winning.",
          url: "https://bus42.github.io/tictactoe/"
        },
        {
          image: require("../Assets/pomodoro.png"),
          title: "Pomodoro Clock",
          content:
            "The Pomodoro Technique, developed by Francesco Cirillo in the late 1980s, uses a timer to break down work into intervals - traditionally 25 minutes in length separated by short breaks. These intervals are named pomodoros, the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student.",
          url: "https://bus42.github.io/pomodoro/"
        },
        {
          image: require("../Assets/JS_Calculator.png"),
          title: "JavaScript Calculator",
          content:
            "This was built for FreeCodeCamp. While not a requirement for the assignment, I wanted to demonstrate use of CSS flexbox and plain JavaScript.",
          url: "https://bus42.github.io/JSCalculator/"
        },
        {
          image: require("../Assets/wikireader.png"),
          title: "WikiReader",
          content:
            "This app has a random page generator which will display a random Wikipedia article in a new window or allow you to enter any search term and show you the top ten rated results with a url that will open in another tab in your browser.",
          url: "https://bus42.github.io/wiki-reader/"
        }
      ]
    };
  }

  render() {
    const galleryStyle = {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-evenly",
      alignItems: "center"
    };
    return (
      <div style={galleryStyle}>
        {this.state.previews.map((preview, index) => {
          return <ImageCard card={preview} key={index} />;
        })}
      </div>
    );
  }
}

export default Gallery;
