import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => (
  <div className="nft__blog-container_article">
    <div className="nft__blog-container_article-image overflow-hidden">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="nft__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
