import React from "react";
import ImageCard from "./ImageCard";
import { previews } from './projectList';

const windowWidth = window.innerWidth;

const calculatedStyle = windowWidth > 1400 ? {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '10px'
} : {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center"
  };

const Projects = (props) => {
  return (
    <div
      style={calculatedStyle}
    >
      {previews.map((preview, index) => {
        return <ImageCard card={preview} key={index} />;
      })}
    </div>
  );
}

export default Projects;
