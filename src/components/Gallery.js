import React from "react";
import ImageCard from "./ImageCard";
import { previews } from './projectList';

const Gallery = (props) => {
const gallery_wrapperStyle={
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around"
      }
  return (
    <div id="Gallery_wrapper"
      style={gallery_wrapperStyle}
    >
      {previews.map((preview, index) => {
        return <ImageCard card={preview} key={index} />;
      })}
    </div>
  );
}

export default Gallery;
