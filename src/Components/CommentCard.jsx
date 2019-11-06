import React from 'react';
import '../css/CommentCard.css';

const CommentCard = props => {
  return <div className="comment-card">{props.comment.body}</div>;
};

export default CommentCard;
