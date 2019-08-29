import React from "react";
import ImageCard from "./ImageCard";
import { certifications } from './certificationList';

const Certifications = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center"
      }}
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
