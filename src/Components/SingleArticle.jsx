import React, { Component } from 'react';
import * as api from '../utils/api';
import Loader from '../Components/Loader';
import '../css/SingleArticle.css';
import Voter from '../Components/Voter';

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  };
  componentDidMount() {
    api.fetchSingleArticle(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }
  render() {
    return (
      <div className="single-article">
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <div>
            <h1>{this.state.article.title}</h1>
            <div className="article-body">{this.state.article.body}</div>
            <div className="article-footer">
              <Voter article={this.state.article} />
              <div>Comments: {this.state.article.comment_count}</div>
              {this.state.article.comments.map(comment => {
                return <div></div>;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleArticle;
