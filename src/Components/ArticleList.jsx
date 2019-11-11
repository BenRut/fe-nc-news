import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import Loader from './Loader';
import ErrorPage from '../Components/ErrorPage';
import '../css/ArticleList.css';
import '../css/ArticleCard.css';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    isFiltered: false,
    sortBy: 'created_at',
    order: '',
    err: null
  };
  componentDidMount() {
    api
      .fetchArticles()
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
  componentDidUpdate(prevProps, prevState) {
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
    this.setState({ order: e.target.value });
  };

  render() {
    const { err } = this.state;
    if (err) return <ErrorPage />;
    return (
      <div id="article-list">
        <div className="sort-by">
          Sort by:
          <select className="select-css" onChange={this.handleSortBy}>
            <option value="created_at">date</option>
            <option value="title">title</option>
            <option value="author">author</option>
            <option value="votes">popular</option>
            <option value="comment_count">most talked about</option>
          </select>
          Order:
          <select
            className="select-css"
            defaultValue="asc"
            onChange={this.handleOrder}
          >
            <option value="asc">ascending</option>
            <option value="desc">descending</option>
          </select>
        </div>
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <>
            {this.state.articles.map(article => {
              return (
                <ArticleCard
                  username={this.props.username}
                  key={article.article_id}
                  article={article}
                />
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default ArticleList;
