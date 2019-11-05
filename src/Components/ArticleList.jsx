import React, { Component } from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import ArticleCard from './ArticleCard';
import Loader from './Loader';
import '../css/ArticleList.css';
import '../css/ArticleCard.css';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };
  componentDidMount() {
    api.fetchAllArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }
  render() {
    return (
      <div id="article-list">
        <div>sorting filters</div>
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <>
            {this.state.articles.map(article => {
              return (
                <Link to={`/articles/${article.article_id}`}>
                  <ArticleCard key={article.article_id} article={article} />
                </Link>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default ArticleList;
