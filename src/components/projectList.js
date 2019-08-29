const blogosaurus = require("../Assets/blogosaurus.png");
const jsClock = require("../Assets/JSclock.png");
const magicCounter = require("../Assets/magic_counter.png");
const twitcher = require("../Assets/twitcher.png");
const simon = require("../Assets/simon.png");
const rickAndMorty = require("../Assets/soundboard.png");
const pomodorClock = require("../Assets/pomodoro.png");
const wikiReader = require("../Assets/wikireader.png");
const jsCalculator = require("../Assets/JS_Calculator.png");
const ticTacWars = require("../Assets/tictactoe.png");

export const previews = [
    {
        image: blogosaurus,
        title: "Blogosaurus",
        content:
            "I made this as a way to demonstrate authentication and realtime database integration with Firebase. Sign in (even with a fake email - it's just a demo), view posts by other users, and make new posts",
        url: "https://net-ninja-mario-plan-ad7c1.firebaseapp.com/",
        href: "#one!"
    },
    {
        image: jsClock,
        title: "Javascript Clock",
        content: "An internet clock built with plain 'ol CSS and JS",
        url: "https://bus42.github.io/JSClock/",
        href: "#two!"
    },
    {
        image: magicCounter,
        title: "Magic Counter",
        content:
            "Counter42 uses Firebase for authentication and realtime database. Change your name and background, select additional damage types, and create an account to keep track of wins and losses. It can also be downloaded and run as a native app.",
        url: "https://counter42.studio42dev.com/",
        href: "#three!"
    },
    {
        image: twitcher,
        title: "Twitcher",
        content:
            "Built as part of the FreeCodeCamp curriculum, this app displays a list of frequent Twitch.tv users, shows number of views and followers for each, if they are currently streaming, and their avatars using the Twitch.tv API. The app also has a feature which lets you search for other Twitch.tv users. This app uses jQuery and Bootstrap and is hosted with Firebase.",
        url: "https://twitcher-c1978.firebaseapp.com/",
        href: "#four!"
    },
    {
        image: simon,
        title: "Simon (clone)",
        content:
            "Play the classic Simon game in regular or strict mode! Get it right 20 rounds in a row and you win the game.",
        url: "https://bus42.github.io/simonClone/",
        href: "#five!"
    },
    {
        image: rickAndMorty,
        title: "Rick and Morty Soundboard",
        content:
            "As part of freeCodeCamp's curriculum, I created a soundboard that can be controlled by mouse, keyboard, or touch. I wanted a 'cartoony' feel, so I went with Rick and Morty. It can also be downloaded and run as a native app on most phones.",
        url: "https://soundboard-420247.firebaseapp.com/",
        href: "#six!"
    },
    {
        image: pomodorClock,
        title: "Pomodoro Clock",
        content:
            "The Pomodoro Technique uses a timer to break down work into intervals separated by breaks of a set duration.",
        url: "https://bus42.github.io/pomodoro/",
        href: "#seven!"
    },
    {
        image: wikiReader,
        title: "WikiReader",
        content:
            "Search for Wikipedia articles and get the top 10 results or search for a random article.",
        url: "https://bus42.github.io/wiki-reader/",
        href: "#eight!"
    },
    {
        image: jsCalculator,
        title: "Javascript Calculator",
        content:
            "This calculator was built as a part of my curriculum in FreeCodeCamp. It was created using vanilla JS and plain CSS",
        url: "https://bus42.github.io/JSCalculator/",
        href: "#nine!"
    },
    {
        image: ticTacWars,
        title: "Tic Tac Wars",
        content:
            "It's the classic game of Tic-Tac-Toe. Choose your team and beat the computer. It will beat you if you let it, and try to keep you from winning.",
        url: "https://bus42.github.io/tictactoe/",
        href: "#ten!"
    }
]