import React from "react";
import ImageCard from "./ImageCard";
import { previews } from './projectList';

const Gallery = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center"
      }}
    >
      {previews.map((preview, index) => {
        return <ImageCard card={preview} key={index} />;
      })}
    </div>
  );
}

export default Gallery;
