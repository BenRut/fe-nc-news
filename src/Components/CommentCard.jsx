import React from 'react';
import '../css/CommentCard.css';
import Voter from '../Components/Voter';

const CommentCard = props => {
  return (
    <div className="comment-card">
      <p>{props.comment.body}</p>
      <div className="comment-footer">
        <Voter
          id={props.comment.comment_id}
          endpoint="comments"
          votes={props.comment.votes}
        />
      </div>
    </div>
  );
};

export default CommentCard;
