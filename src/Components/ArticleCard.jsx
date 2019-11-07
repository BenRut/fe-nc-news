import React from 'react';
import '../css/ArticleCard.css';
import { Link } from '@reach/router';
import Voter from '../Components/Voter';
import CommentList from '../Components/CommentList';

const ArticleCard = props => {
  return (
    <div className="article-card">
      <div className="article-card-top">
        <div className="card-header">
          <p>@{props.article.author}</p>
          <p>{props.article.created_at}</p>
        </div>
        <Link to={`/articles/${props.article.article_id}`}>
          <h3>{props.article.title}</h3>

          <div className="card-body">
            {props.article.body.slice(0, 130) + '...'}
          </div>
        </Link>
      </div>

      <div className="card-footer">
        <Voter
          id={props.article.article_id}
          endpoint="articles"
          votes={props.article.votes}
        />
        <div>Comments: {props.article.comment_count}</div>
        <div className="topic-button">#{props.article.topic}</div>
      </div>
      <div>
        <CommentList
          username={props.username}
          article_id={props.article.article_id}
        />
      </div>
    </div>
  );
};

export default ArticleCard;
