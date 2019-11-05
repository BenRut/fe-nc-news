import React, { Component } from 'react';
import * as api from '../utils/api';

class SingleArticle extends Component {
  state = {
    article: {}
  };
  componentDidMount() {
    api.fetchSingleArticle().then(article => {
      console.log(article);
    });
  }
  render() {
    return <div></div>;
  }
}

export default SingleArticle;
