import React from "react";
import ImageCard from "./ImageCard";
import { certifications } from './certificationList';

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

const Certifications = (props) => {
  return (
    <div
      style={calculatedStyle}
    >
      {certifications.map((cert, index) => {
        return (
          <ImageCard card={cert} key={index} />
        );
      })}
    </div>
  );
}

export default Certifications;
