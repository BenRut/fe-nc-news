import React, { Component } from 'react';
import '../css/ArticleCard.css';
import '../css/CommentList.css';
import { Link } from '@reach/router';
import Voter from '../Components/Voter';
import CommentList from '../Components/CommentList';
import Comments from '../icons/comments.png';

class ArticleCard extends Component {
  state = {
    showComments: false
  };
  toggleOpen = () => {
    this.setState(currentState => {
      return { showComments: !currentState.showComments };
    });
  };
  render() {
    return (
      <div className="article-card">
        <div className="article-card-top">
          <div className="card-header">
            <p>@{this.props.article.author}</p>
            <p>
              {this.props.article.created_at
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('/')}
            </p>
          </div>
          <Link to={`/articles/${this.props.article.article_id}`}>
            <h3>{this.props.article.title}</h3>

            <div className="card-body">
              {this.props.article.body.slice(0, 130) + '...'}
            </div>
          </Link>
        </div>

        <div className="card-footer">
          {this.props.username !== this.props.article.author && (
            <Voter
              id={this.props.article.article_id}
              endpoint="articles"
              votes={this.props.article.votes}
            />
          )}
          {this.props.username === this.props.article.author && (
            <p>Votes: {this.props.article.votes}</p>
          )}
          <input type="image" src={Comments} onClick={this.toggleOpen} alt="" />
          <p> {this.props.article.comment_count}</p>
          <Link
            key={this.props.article.topic}
            to={`/${this.props.article.topic}/articles`}
          >
            <button className="topic-button">
              #{this.props.article.topic}
            </button>
          </Link>
        </div>
        <div className="comment-list">
          {this.state.showComments && (
            <CommentList
              open={this.state.showComments}
              username={this.props.username}
              article_id={this.props.article.article_id}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ArticleCard;
