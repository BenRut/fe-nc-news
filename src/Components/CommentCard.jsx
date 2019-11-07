import React from 'react';
import '../css/CommentCard.css';
import Voter from '../Components/Voter';
import DeleteComment from '../Components/DeleteComment';

const CommentCard = props => {
  return (
    <div className="comment-card">
      <p>{props.comment.body}</p>
      <div className="comment-footer">
        {props.username !== props.comment.author && (
          <Voter
            id={props.comment.comment_id}
            endpoint="comments"
            votes={props.comment.votes}
          />
        )}
        {props.username === props.comment.author && <DeleteComment />}
      </div>
      <hr />
    </div>
  );
};

export default CommentCard;
