import React from 'react';
import './css/App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Topics from './Components/Topics';
import { Router } from '@reach/router';
import ArticleList from './Components/ArticleList';
import SingleArticle from './Components/SingleArticle';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Topics />
      <Router>
        <ArticleList path="/" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
