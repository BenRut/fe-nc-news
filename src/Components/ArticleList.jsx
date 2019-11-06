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
    isLoading: true,
    isFiltered: false,
    sortBy: 'created_at',
    order: 'desc'
  };
  componentDidMount() {
    console.log('mounting');

    api.fetchArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('updating');
    if (
      this.props.topic !== prevProps.topic ||
      this.state.sortBy !== prevState.sortBy ||
      this.state.order !== prevState.order
    ) {
      api
        .fetchArticles(this.props.topic, this.state.sortBy, this.state.order)
        .then(articles => {
          this.setState({ articles, isFiltered: true });
        });
    }
  }
  handleSortBy = e => {
    this.setState({ sortBy: e.target.value });
  };

  handleOrder = e => {
    console.log(e.target.value);

    this.setState({ order: e.target.value });
  };

  render() {
    return (
      <div id="article-list">
        <div>
          Sort by:
          <select onChange={this.handleSortBy}>
            <option value="created_at">date</option>
            <option value="title">title</option>
            <option value="author">author</option>
            <option value="votes">popular</option>
            <option value="comment_count">most talked about</option>
          </select>
          Order:
          <select onChange={this.handleOrder}>
            <option value="asc">ascending</option>
            <option value="desc">descending</option>
          </select>
        </div>
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <>
            {this.state.articles.map(article => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </>
        )}
      </div>
    );
  }
}

export default ArticleList;
