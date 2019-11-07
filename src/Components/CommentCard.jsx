import React from 'react';
import '../css/CommentCard.css';
import Voter from '../Components/Voter';
import DeleteComment from '../Components/DeleteComment';

const CommentCard = props => {
  return (
    <div className="comment-card">
      <div className="comment-header">
        {props.username !== props.comment.author && (
          <p>@{props.comment.author}</p>
        )}
        {props.username === props.comment.author && (
          <p>
            <span className="user-comment">@{props.comment.author}</span>
          </p>
        )}
      </div>
      <p>{props.comment.body}</p>
      <div className="comment-footer">
        {props.username !== props.comment.author && (
          <Voter
            id={props.comment.comment_id}
            endpoint="comments"
            votes={props.comment.votes}
          />
        )}
        {props.username === props.comment.author && (
          <DeleteComment
            getArticleComments={props.getArticleComments}
            comment_id={props.comment.comment_id}
          />
        )}
      </div>
      <hr />
    </div>
  );
};

export default CommentCard;
