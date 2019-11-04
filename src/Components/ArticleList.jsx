import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import Loader from './Loader';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };
  componentDidMount() {
    api.fetchArticles();
  }
  render() {
    return (
      <div>
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <>
            {this.state.articles.map(article => {
              return <ArticleCard />;
            })}
          </>
        )}
      </div>
    );
  }
}

export default ArticleList;
