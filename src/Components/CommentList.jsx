import React, { Component } from 'react';
import * as api from '../utils/api';
import Loader from '../Components/Loader';
import CommentCard from '../Components/CommentCard';
import '../css/CommentList.css';
import PostComment from '../Components/PostComment';

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true
  };
  componentDidMount() {
    api.fetchCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }
  addComment = newComment => {
    this.setState(currentState => {
      return {
        comments: [newComment.data.comment, ...currentState.comments]
      };
    });
  };
  getArticleComments = () => {
    api.fetchCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };
  render() {
    return (
      <div className="comment-list">
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <>
            {this.state.comments.map(comment => {
              return (
                <CommentCard
                  username={this.props.username}
                  key={comment.comment_id}
                  comment={comment}
                  getArticleComments={this.getArticleComments}
                />
              );
            })}
            <PostComment
              username={this.props.username}
              article_id={this.props.article_id}
              addComment={this.addComment}
            />
          </>
        )}
      </div>
    );
  }
}

export default CommentList;
