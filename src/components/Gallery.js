import React from "react";
import ImageCard from "./ImageCard";

const windowWidth = window.innerWidth;

const calculatedStyle =
  windowWidth > 1400
    ? {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "10px"
      }
    : {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center"
      };

const Gallery = props => (
  <div style={calculatedStyle}>
    {props.list.map((entry, index) => {
      return <ImageCard card={entry} key={index} />;
    })}
  </div>
);

export default Gallery;
