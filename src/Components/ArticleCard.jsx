import React from 'react';
import '../css/ArticleCard.css';
import { Link } from '@reach/router';
import Voter from '../Components/Voter';
import CommentList from '../Components/CommentList';
import Comments from '../icons/comments.png';

const ArticleCard = props => {
  return (
    <div className="article-card">
      <div className="article-card-top">
        <div className="card-header">
          <p>@{props.article.author}</p>
          <p>
            {props.article.created_at
              .slice(0, 10)
              .split('-')
              .reverse()
              .join('/')}
          </p>
        </div>
        <Link to={`/articles/${props.article.article_id}`}>
          <h3>{props.article.title}</h3>

          <div className="card-body">
            {props.article.body.slice(0, 130) + '...'}
          </div>
        </Link>
      </div>

      <div className="card-footer">
        {props.username !== props.article.author && (
          <Voter
            id={props.article.article_id}
            endpoint="articles"
            votes={props.article.votes}
          />
        )}
        <img src={Comments} alt="" />
        <p> {props.article.comment_count}</p>
        <Link key={props.article.topic} to={`/${props.article.topic}/articles`}>
          <button className="topic-button">#{props.article.topic}</button>
        </Link>
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
