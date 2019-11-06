import React, { Component } from 'react';
import * as api from '../utils/api';
import Loader from '../Components/Loader';
import CommentCard from '../Components/CommentCard';
import '../css/CommentList.css';

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
  render() {
    return (
      <div className="comment-list">
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <>
            {this.state.comments.map(comment => {
              return <CommentCard key={comment.comment_id} comment={comment} />;
            })}
            <div className="comment-list-footer"></div>
          </>
        )}
      </div>
    );
  }
}

export default CommentList;
