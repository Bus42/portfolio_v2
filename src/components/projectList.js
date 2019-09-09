import React from 'react';
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

export const projects = [
    {
        image: blogosaurus,
        title: "Blogosaurus",
        content:
            <p>I made this as a way to demonstrate authentication and realtime database integration with Firebase. Sign in (even with a fake email - it's just a demo), view posts by other users, and make new posts</p>,
        url: "https://net-ninja-mario-plan-ad7c1.firebaseapp.com/",
    },
    {
        image: jsClock,
        title: "Javascript Clock",
        content: <p>An internet clock built with plain 'ol CSS and JS</p>,
        url: "https://bus42.github.io/JSClock/",
    },
    {
        image: magicCounter,
        title: "Magic Counter",
        content:
            <p>Set name and background, additional damage types, and create an account to keep track of wins and losses. Downloadable on Android devices and iPhones.</p>,
        url: "https://counter42.studio42dev.com/",
    },
    {
        image: twitcher,
        title: "Twitcher",
        content:
            <p>This app displays a list of frequent Twitch.tv users with views and followers for each, shows if they are currently streaming and includes a user search.</p>,
        url: "https://twitcher-c1978.firebaseapp.com/",
    },
    {
        image: simon,
        title: "Simon (clone)",
        content:
            <p>Play the classic Simon game in regular or strict mode! Get it right 20 rounds in a row and you win the game.</p>,
        url: "https://bus42.github.io/simonClone/",
    },
    {
        image: rickAndMorty,
        title: "Rick and Morty Soundboard",
        content:
            <p>This soundboard that can be controlled by mouse, keyboard, or touch. I wanted a 'cartoony' feel, so I went with Rick and Morty(PG-13 Language). It can also be downloaded and run as a native app on iPhone and Android devices.</p>,
        url: "https://soundboard-420247.firebaseapp.com/",
    },
    {
        image: pomodorClock,
        title: "Pomodoro Clock",
        content:
            <p>The Pomodoro Technique uses a timer to break down work into intervals separated by breaks of a set duration.</p>,
        url: "https://bus42.github.io/pomodoro/",
    },
    {
        image: wikiReader,
        title: "WikiReader",
        content:
            <p>Search for Wikipedia articles and get the top 10 results or search for a random article.</p>,
        url: "https://bus42.github.io/wiki-reader/",
    },
    {
        image: jsCalculator,
        title: "Javascript Calculator",
        content:
            <p>This calculator was built as a part of my curriculum in FreeCodeCamp. It was created using vanilla JS and plain CSS</p>,
        url: "https://bus42.github.io/JSCalculator/",
    },
    {
        image: ticTacWars,
        title: "Tic Tac Wars",
        content:
            <p>It's the classic game of Tic-Tac-Toe. Choose your team and beat the computer. It will beat you if you let it, and try to keep you from winning.</p>,
        url: "https://bus42.github.io/tictactoe/",
    }
]