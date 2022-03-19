import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
import cocacola from "../../Images/main/coca.jpg";

export const Article = () => {
  return (
    <>
      <div className="article">
        <h4 className="title">
          Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
          lacus nec metus bibendum egestas.
        </h4>
        <img className="imgArticle" src={cocacola} />
        <div className="comments">
          <p className="comment">{loremIpsum()}</p>
          <button className="expandComments">Expand comments</button>
        </div>
      </div>
    </>
  );
};
