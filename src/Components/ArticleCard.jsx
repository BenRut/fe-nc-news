import React from 'react';
import '../css/ArticleCard.css';
import { Link } from '@reach/router';
import Voter from '../Components/Voter';
import CommentList from '../Components/CommentList';

const ArticleCard = props => {
  return (
    <div className="article-card">
      <Link to={`/articles/${props.article.article_id}`}>
        <h3>{props.article.title}</h3>
        <p>#{props.article.topic}</p>
        <p>{props.article.created_at}</p>
        <p>{props.article.author}</p>
        <div className="card-body">
          {props.article.body.slice(0, 140) + '...'}
        </div>
      </Link>
      <div className="card-footer">
        <Voter article={props.article} />
        <div>Comments: {props.article.comment_count}</div>
      </div>
      <div>
        <CommentList article_id={props.article.article_id} />
      </div>
    </div>
  );
};

export default ArticleCard;
