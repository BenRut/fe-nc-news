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
    isFiltered: false
  };
  componentDidMount() {
    api.fetchArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic !== prevProps.topic) {
      api.fetchArticles(this.props.topic).then(articles => {
        this.setState({ articles, isFiltered: true });
      });
    }
  }

  render() {
    console.log(this.props.topic);

    return (
      <div id="article-list">
        <div>sorting filters</div>
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <>
            {this.state.articles.map(article => {
              return (
                <Link
                  key={article.article_id}
                  to={`/articles/${article.article_id}`}
                >
                  <ArticleCard article={article} />
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
