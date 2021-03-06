import React, { Component } from 'react';
import * as api from '../utils/api';
import '../css/DeleteComment.css';

class DeleteComment extends Component {
  state = {};
  handleClick = e => {
    api.deleteComment(this.props.comment_id).then(() => {
      return this.props.getArticleComments();
    });
  };
  render() {
    return (
      <button className="delete-comment" onClick={this.handleClick}>
        Delete comment
      </button>
    );
  }
}

export default DeleteComment;
