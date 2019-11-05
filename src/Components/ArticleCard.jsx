import React from 'react';
import '../css/ArticleCard.css';

const ArticleCard = props => {
  return (
    <div className="article-card">
      <h3>{props.article.title}</h3>
      <div className="card-body">
        {props.article.body.slice(0, 200) + '...'}
      </div>
    </div>
  );
};

export default ArticleCard;
