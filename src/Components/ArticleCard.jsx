import React from 'react';
import '../css/ArticleCard.css';
import Voter from '../Components/Voter';

const ArticleCard = props => {
  return (
    <div className="article-card">
      <h3>{props.article.title}</h3>
      <div className="card-body">
        {props.article.body.slice(0, 140) + '...'}
      </div>
      <div className="card-footer">
        <Voter article={props.article} />
        <div>Comments: {props.article.comment_count}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
