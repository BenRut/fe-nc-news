import React, { Component } from 'react';
import './css/App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ErrorPage from './Components/ErrorPage';

import { Router } from '@reach/router';
import ArticleList from './Components/ArticleList';
import SingleArticle from './Components/SingleArticle';
import Footer from './Components/Footer';

class App extends Component {
  state = {
    username: 'weegembump'
  };
  render() {
    return (
      <>
        <div className="App">
          <Header username={this.state.username} id="header" />
          <Nav id="nav" />
          <div id="main">
            <Router>
              <ArticleList
                username={this.state.username}
                id="article-list"
                path="/"
              />
              <ArticleList
                username={this.state.username}
                id="article-list"
                path="/:topic/articles"
              />
              <SingleArticle
                username={this.state.username}
                className="article"
                path="/articles/:article_id"
              />
              <ErrorPage default />
            </Router>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
