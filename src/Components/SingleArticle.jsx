import React, { Component } from 'react';
import * as api from '../utils/api';
import Loader from '../Components/Loader';
import '../css/SingleArticle.css';

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
    console.log(this.state.article);
    return (
      <div className="single-article">
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <div>
            <h1>{this.state.article.title}</h1>
            <div className="article-body">{this.state.article.body}</div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleArticle;
