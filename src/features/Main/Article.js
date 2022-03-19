import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
import cocacola from "../../Images/main/coca.jpg";

export const Article = (props) => {
  return (
    <>
      <div className="article">
        <h4 className="title">{props.article.title}</h4>
        <img className="imgArticle" src={props.article.url} alt="cocacola" />
        <div className="comments">
          <p className="comment"> {props.article.ups}</p>
          <button className="expandComments">Expand comments</button>
          <votes className="votes">
            <div> Likes: {props.article.ups}</div>
            <div>
              Unlikes:
              {props.article.downs}
            </div>
          </votes>
        </div>
      </div>
    </>
  );
};
