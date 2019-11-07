import React, { Component } from 'react';

class ArticleSorter extends Component {
  render() {
    return (
      <div>
        Sort by:
        <select>
          <option value="created_at">date</option>
          <option value="title">title</option>
          <option value="author">author</option>
          <option value="votes">popular</option>
          <option value="comment_count">most talked about</option>
        </select>
        Order:
        <select>
          <option value="desc">descending</option>
          <option value="asc">ascending</option>
        </select>
      </div>
    );
  }
}

export default ArticleSorter;
