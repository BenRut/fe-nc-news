import React from 'react';
import '../css/ArticleCard.css';

const ArticleCard = props => {
  return (
    <div className="article-card">
      <h3>{props.article.title}</h3>
    </div>
  );
};

export default ArticleCard;
