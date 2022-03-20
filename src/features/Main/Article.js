import React from "react";

export const Article = (props) => {
  const comments = `http://www.reddit.com${props.article.permalink}`;
  return (
    <>
      <div className="article">
        <h4 className="title">{props.article.title}</h4>
        <img className="imgArticle" src={props.article.thumbnail} alt="" />
        <div className="comments">
          <a href={comments} target="_blank">
            <button className="expandComments">Go to comments</button>
          </a>
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
