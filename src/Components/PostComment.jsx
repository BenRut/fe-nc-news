import React, { Component } from 'react';
import * as api from '../utils/api';
import '../css/PostComment.css';

class PostComment extends Component {
  state = {
    input: '',
    showAlert: false
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input.length === 0) {
      this.setState({ showAlert: true });
    } else {
      api
        .postComment(
          this.props.article_id,
          this.props.username,
          this.state.input
        )
        .then(newComment => {
          this.props.addComment(newComment);
        });
      this.setState({ input: '', showAlert: false });
    }
  };

  handleInput = value => {
    this.setState({ input: value });
  };
  render() {
    return (
      <div className="post-comment">
        <form action="" onSubmit={this.handleSubmit}>
          <input
            onChange={e => this.handleInput(e.target.value)}
            placeholder="Type your comment here..."
            className="comment-input"
            type="text"
            value={this.state.input}
          />
          {this.state.showAlert && <p>Can't submit empty comment</p>}
        </form>
      </div>
    );
  }
}

export default PostComment;
