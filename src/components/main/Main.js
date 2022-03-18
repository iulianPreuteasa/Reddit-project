import React from "react";
import { loremIpsum, Avatar } from "react-lorem-ipsum";
import "./main.css";
import cocacola from "../../Images/main/coca.jpg";
const Main = () => {
  return (
    <>
      <div className="container">
        <div className="articles">
          <div className="article">
            <h4 className="title">
              Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
              fringilla lacus nec metus bibendum egestas.
            </h4>
            <img className="imgArticle" src={cocacola} />
            <div className="comments">
              <p className="comment">{loremIpsum()}</p>
              <button className="expandComments">Expand comments</button>
            </div>
          </div>
          <div className="article">
            <h4 className="title">
              Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
              fringilla lacus nec metus bibendum egestas.
            </h4>
            <img className="imgArticle" src={cocacola} />
            <div className="comments">
              <p className="comment">{loremIpsum()}</p>
              <button className="expandComments">Expand comments</button>
            </div>
          </div>
          <div className="article">
            <h4 className="title">
              Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
              fringilla lacus nec metus bibendum egestas.
            </h4>
            <img className="imgArticle" src={cocacola} />
            <div className="comments">
              <p className="comment">{loremIpsum()}</p>
              <button className="expandComments">Expand comments</button>
            </div>
          </div>
          <div className="article">
            <h4 className="title">
              Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
              fringilla lacus nec metus bibendum egestas.
            </h4>
            <img className="imgArticle" src={cocacola} />
            <div className="comments">
              <p className="comment">{loremIpsum()}</p>
              <button className="expandComments">Expand comments</button>
            </div>
          </div>
          <div className="article">
            <h4 className="title">
              Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
              fringilla lacus nec metus bibendum egestas.
            </h4>
            <img className="imgArticle" src={cocacola} />
            <div className="comments">
              <p className="comment">{loremIpsum()}</p>
              <button className="expandComments">Expand comments</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
