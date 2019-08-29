import React from "react";
const respWebDes = require("../Assets/responsive-web-design.png");
const jsAlgs = require("../Assets/javascript-algorithms-and-data-structures.png");
const frontEnd = require("../Assets/front-end-development.png");
const libraries = require("../Assets/front-end-libraries.png");

export const certifications = [
  {
    title: "Responsive Web Design",
    image: respWebDes,
    url:
      "https://www.freecodecamp.org/certification/bus42/responsive-web-design",
    content: (
      <div>
        Course Projects
        <ul className="collection">
          <li className="collection-item grey lighten-2">
            <a
              href="https://s.codepen.io/Bus42/debug/dXmXpO/xnkabZbydoOM"
              target="new"
            >
              Tribute Page
            </a>
          </li>
          <li className="collection-item grey lighten-2">
            <a
              href="https://s.codepen.io/Bus42/debug/GYPeYg/vPAKKeKvVVJA"
              target="new"
            >
              Survey Form
            </a>
          </li>
          <li className="collection-item grey lighten-2">
            <a
              href="https://s.codepen.io/Bus42/debug/aQOZKK/PNkvYKYJLXJA"
              target="new"
            >
              Product Landing Page
            </a>
          </li>
          <li className="collection-item grey lighten-2">
            <a
              href="https://s.codepen.io/Bus42/debug/KrdZeZ/nqAwvWvqeoEr"
              target="new"
            >
              Technical Documentation Page
            </a>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "JS Algorithms and Data Structures",
    image: jsAlgs,
    url:
      "https://www.freecodecamp.org/certification/bus42/javascript-algorithms-and-data-structures",
    content: (
      <p>
        All projects were completed on the{" "}
        <a href="https://freecodecamp.org">freeCodeCamp</a> website for this
        certification.
      </p>
    )
  },
  {
    title: "Front End Development",
    image: frontEnd,
    url: "https://www.freecodecamp.org/certification/bus42/legacy-front-end",
    content: (
      <p>
        Aspects of this course have been split into different courses and it is
        now considered a legacy certification. Individual projects are no longer
        available.
      </p>
    )
  },
  {
    title: "Front End Libraries",
    image: libraries,
    url: "https://www.freecodecamp.org/certification/bus42/front-end-libraries",
    content: (
      <div>
        Course Projects
        <ul className="collection">
          <li className="collection-item grey lighten-2">
            <a
              href="https://s.codepen.io/Bus42/debug/gEVGax/bYMdyXyzXZor"
              target="new"
            >
              Markdown Previewer
            </a>
          </li>
          <li className="collection-item grey lighten-2">
            <a
              href="https://s.codepen.io/Bus42/debug/NJQypB/ZorBazadzJZM"
              target="new"
            >
              Drum Machine
            </a>
          </li>
          <li className="collection-item grey lighten-2">
            <a
              href="https://s.codepen.io/Bus42/debug/bgdzop/xJAjOnOLnzxk"
              target="new"
            >
              JavaScript Calculator
            </a>
          </li>
          <li className="collection-item grey lighten-2">
            <a
              href="https://s.codepen.io/Bus42/debug/OWRJyq/mVkbGDGnDeYM"
              target="new"
            >
              Pomodoro Clock
            </a>
          </li>
        </ul>
      </div>
    )
  }
];
