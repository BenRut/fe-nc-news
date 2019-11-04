import React, { Component } from 'react';
import * as api from '../utils/api';
import './css/Loader.css';
import ArticleCard from './ArticleCard';
import Loader from './Loader';
import '../css/ArticleList.css';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };
  // componentDidMount() {
  //   api.fetchArticles();
  // }
  render() {
    return (
      <div id="article-list">
        {this.state.isLoading && <Loader id="loader" />}
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
