import React from "react";
import { Link } from "react-router-dom";
import "./css/Article.css";
import { IArticle } from "./types/article";

interface ArticleAttrs {
  article: IArticle;
}

const Article = ({ article }: ArticleAttrs) => {
  return (
    <>
      {" "}
      <Link to={"/articles/" + article.id}>
        <div className="article-box">
          <h1>{article.title}</h1>
          <h2>{article.intro}</h2>
          <p>{article.category}</p>
          <p>{article.createdOn}</p>
        </div>
      </Link>
    </>
  );
};

export default Article;
