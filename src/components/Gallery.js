import React, { Component } from "react";
import ImageCard from "./ImageCard";
import M from "materialize-css";
import { CSSTransition } from "react-transition-group";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touchscreen: false,
      previews: [
        {
          image: require("../Assets/blogosaurus.png"),
          title: "Blogosaurus",
          content:
            "I made this as a way to demonstrate authentication and realtime database integration with Firebase. Sign in (even with a fake email - it's just a demo), view posts by other users, and make new posts",
          url:
            "https://https://net-ninja-mario-plan-ad7c1.firebaseapp.com/.studio42dev.com",
          href: "#one!"
        },
        {
          image: require("../Assets/JSclock.png"),
          title: "Javascript Clock",
          content: "An internet clock built with plain 'ol CSS and JS",
          url: "https://bus42.github.io/JSClock/",
          href: "#two!"
        },
        {
          image: require("../Assets/magic_counter.png"),
          title: "Magic Counter",
          content:
            "Counter42 uses Firebase for authentication and realtime database. Change your name and background, select additional damage types, and create an account to keep track of wins and losses. It can also be downloaded and run as a native app.",
          url: "https://counter42.studio42dev.com/",
          href: "#three!"
        },
        {
          image: require("../Assets/twitcher.png"),
          title: "Twitcher",
          content:
            "Built as part of the FreeCodeCamp curriculum, this app displays a list of frequent Twitch.tv users, shows number of views and followers for each, if they are currently streaming, and their avatars using the Twitch.tv API. The app also has a feature which lets you search for other Twitch.tv users. This app uses jQuery and Bootstrap and is hosted with Firebase.",
          url: "https://twitcher-c1978.firebaseapp.com/",
          href: "#four!"
        },
        {
          image: require("../Assets/simon.png"),
          title: "Simon (clone)",
          content:
            "Play the classic Simon game! You can play in strict mode as well, where you lose if you get it wrong once. In regular mode you have three chances to match the pattern each time a button is added to the pattern. Get it right 20 rounds in a row and you win the game.",
          url: "https://bus42.github.io/simonClone/",
          href: "#five!"
        },
        {
          image: require("../Assets/soundboard.png"),
          title: "Rick and Morty Soundboard",
          content:
            "As part of freeCodeCamp's curriculum, I created a soundboard that can be controlled by mouse, keyboard, or touch. I wanted a 'cartoony' feel, so I went with Rick and Morty. It can also be downloaded and run as a native app on most phones.",
          url: "https://soundboard-420247.firebaseapp.com/",
          href: "#six!"
        },
        {
          image: require("../Assets/pomodoro.png"),
          title: "Pomodoro Clock",
          content:
            "The Pomodoro Technique, developed by Francesco Cirillo in the late 1980s, uses a timer to break down work into intervals - traditionally 25 minutes in length separated by short breaks. These intervals are named pomodoros, the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student.",
          url: "https://bus42.github.io/pomodoro/",
          href: "#seven!"
        },
        {
          image: require("../Assets/wikireader.png"),
          title: "WikiReader",
          content:
            "This app has a random page generator which will display a random Wikipedia article in a new window or allow you to enter any search term and show you the top ten rated results with a url that will open in another tab in your browser.",
          url: "https://bus42.github.io/wiki-reader/",
          href: "#eight!"
        },
        {
          image: require("../Assets/JS_Calculator.png"),
          title: "Javascript Calculator",
          content:
            "This calculator was built as a part of my curriculum in FreeCodeCamp. It was created using vanilla JS and plain CSS",
          url: "https://bus42.github.io/JSCalculator/",
          href: "#nine!"
        },
        {
          image: require("../Assets/tictactoe.png"),
          title: "Tic Tac Wars",
          content:
            "It's the classic game of Tic-Tac-Toe. Choose your team and beat the computer. It will beat you if you let it, and try to keep you from winning.",
          url: "https://bus42.github.io/tictactoe/",
          href: "#ten!"
        }
      ],
      appearHome: true
    };
  }

  componentDidMount() {
    M.AutoInit();
    if (window.navigator.maxTouchPoints > 0) {
      this.setState({ touchscreen: true });
    }
  }
  componentDidUpdate() {
    console.log("Gallery component updated");
    M.AutoInit();
  }

  render() {
    const { appearHome } = this.state;
    return (
      <CSSTransition
        in={appearHome}
        appear={true}
        timeout={600}
        classNames="gallery_slide"
      >
        {this.state.touchscreen ? (
          <div className="carousel carousel-slider center">
            {this.state.previews.map((preview, index) => {
              return (
                <div
                  key={index}
                  className="carousel-item black white-text"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ImageCard card={preview} key={index} />
                </div>
              );
            })}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            {this.state.previews.map((preview, index) => {
              return <ImageCard card={preview} key={index} />;
            })}
          </div>
        )}
      </CSSTransition>
    );
  }
}

export default Gallery;
