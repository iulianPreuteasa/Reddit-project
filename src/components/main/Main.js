import React from "react";
import "./main.css";
import { useEffect, useState } from "react";
import { Article } from "../../features/Main/Article";

const Main = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("https://www.reddit.com/r/popular.json");
    const data = await response.json();
    setArticle(data.data.children);
    console.log(data.data.children);
  };
  return (
    <>
      <div className="container">
        <div className="articles">
          <Article />
          <Article />
        </div>
      </div>
    </>
  );
};

export default Main;
