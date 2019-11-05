import React from 'react';
import './css/App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';

import { Router } from '@reach/router';
import ArticleList from './Components/ArticleList';
import SingleArticle from './Components/SingleArticle';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header id="header" />
      <Nav id="nav" />
      <div id="main">
        <Router>
          <ArticleList id="article-list" path="/" />
          <ArticleList id="article-list" path="/articles/:topic" />
          <SingleArticle className="article" path="/articles/:article_id" />
        </Router>
      </div>

      <Footer id="footer" />
    </div>
  );
}

export default App;
