import React, { Component } from 'react';
import * as api from '../utils/api';
import Loader from '../Components/Loader';
import '../css/SingleArticle.css';
import Voter from '../Components/Voter';
import CommentList from '../Components/CommentList';
import ErrorPage from '../Components/ErrorPage';
import Comments from '../icons/comments.png';

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };
  componentDidMount() {
    api
      .fetchSingleArticle(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg });
      });
  }
  render() {
    const { err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <div className="single-article">
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <div>
            <h1>{this.state.article.title}</h1>
            <div className="article-body">{this.state.article.body}</div>
            <div className="article-footer">
              <div className="single-article-voter">
                {this.props.username !== this.state.article.author && (
                  <Voter
                    id={this.state.article.article_id}
                    endpoint="articles"
                    votes={this.state.article.votes}
                  />
                )}
                {this.props.username === this.state.article.author && (
                  <p>Votes: {this.state.article.votes}</p>
                )}
              </div>

              <div className="single-article-comment-count">
                <img src={Comments} alt="" />{' '}
                <p>{this.state.article.comment_count}</p>
              </div>
            </div>

            <div className="single-article-comment-list">
              <CommentList
                article_id={this.state.article.article_id}
                comments={this.state.comments}
                username={this.props.username}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleArticle;
